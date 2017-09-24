"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const config_1 = require("../config");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var crypto = require('crypto');
class AuthRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        AuthRoute.connWrapper = connWrapper;
        console.log("[AuthRoute::initialize] Creating temp route.");
        router.post("/", (req, res, next) => {
            new AuthRoute().login(req, res, next);
        });
        router.post("/updpass", (req, res, next) => {
            new AuthRoute().updatePass(req, res, next);
        });
        router.get("/fgpassemail", (req, res, next) => {
            new AuthRoute().emailForForgotPass(req, res, next);
        });
    }
    constructor() {
        super();
    }
    login(req, res, next) {
        console.log('Auth login route', req.body);
        console.log(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`);
        var query = AuthRoute.connWrapper.getConn().query(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                console.log(result[0], result[0].PASSWORD);
                console.log(bcrypt.compareSync(req.body.pass, result[0].PASSWORD));
                console.log(jwt.sign({ pass: result[0].PASSWORD }, config_1.config.jwtsecret));
                if (result[0] &&
                    result[0].PASSWORD &&
                    bcrypt.compareSync(req.body.pass, result[0].PASSWORD)) {
                    res.json({ token: jwt.sign({ pass: result[0].PASSWORD }, config_1.config.jwtsecret) });
                }
                else {
                    res.json({ error: 'Wrong Email or Password ' });
                }
            }
        });
    }
    emailForForgotPass(req, res, next) {
        console.log('Auth forgotpassword route', req.query.email);
        let email = req.query.email;
        let userid = 1;
        let options = {
            auth: {
                api_key: config_1.config.sg_api_key
            }
        };
        var expirationDate = new Date().getTime() + 24 * 3600 * 1000;
        var hash = this.encrypt(`{"expired":${expirationDate},"email":"${email}"}`);
        console.log(hash);
        let transporter = nodemailer.createTransport(sgTransport(options));
        let mailOptions = {
            from: config_1.config.from_email,
            to: email,
            subject: 'Forgot password',
            html: `${config_1.config.client_url_prod}/#/newpass?key=${hash}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error', error);
                res.json({ error: error });
                return;
            }
            res.json({ result: 'Email successfully sended. Check your mail box.' });
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    }
    updatePass(req, res, next) {
        console.log('Auth forgotpassword route', req.body);
        if (!req.body.key) {
            return res.json({ error: 'Wrong security key' });
        }
        let json = this.decrypt(req.body.key);
        let obj = JSON.parse(json);
        console.log(obj);
        let newPassword = req.body.pass;
        if (obj.email && obj.expired) {
            var now = new Date().getTime();
            if (now < obj.expired) {
                console.log('todo update password in db', bcrypt.hashSync(newPassword, 4));
                var query = AuthRoute.connWrapper.getConn().query(`UPDATE USER SET ? WHERE EMAIL = '${obj.email}'`, { PASSWORD: bcrypt.hashSync(newPassword, 4) }, (err, result) => {
                    console.log(err);
                    console.log(result);
                    if (err) {
                        res.json({ error: err });
                    }
                    else {
                        res.json({ result: 'Password updated. Go to login page.' });
                    }
                });
            }
            else {
                console.log('Key is expired');
                res.json({ error: 'Key is expired' });
            }
        }
        else {
            console.log('Wrong key');
            res.json({ error: 'Wrong key' });
        }
    }
    encrypt(text) {
        let cipher = crypto.createCipher(config_1.config.crypto_algorithm, config_1.config.crypto_secret);
        let crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    decrypt(text) {
        let decipher = crypto.createDecipher(config_1.config.crypto_algorithm, config_1.config.crypto_secret);
        let dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}
exports.AuthRoute = AuthRoute;

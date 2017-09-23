"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const config_1 = require("../config");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var crypto = require('crypto');
class AuthRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        AuthRoute.connWrapper = connWrapper;
        console.log("[AuthRoute::initialize] Creating temp route.");
        router.post("/", (req, res, next) => {
            new AuthRoute().login(req, res, next);
        });
        router.get("/forgot", (req, res, next) => {
            new AuthRoute().forgotpassword(req, res, next);
        });
        router.get("/chcode", (req, res, next) => {
            new AuthRoute().checkSecretCodeFromEmail(req, res, next);
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
    forgotpassword(req, res, next) {
        console.log('Auth forgotpassword route');
        this.sendForgotPassEmail('gvkr@tvchd.com', 1);
    }
    checkSecretCodeFromEmail(req, res, next) {
    }
    sendForgotPassEmail(email, userid) {
        var expirationDate = new Date().getTime() + 24 * 3600 * 1000;
        var hash = this.encrypt(`{"expired":${expirationDate},"email":"${email}"}`);
        console.log(hash);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config_1.config.gmail_user,
                pass: config_1.config.gmail_password
            }
        });
        let mailOptions = {
            from: '',
            to: email,
            subject: 'Email confirmation',
            html: `${config_1.config.apiUrl}/forgotpass?key=${hash}`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log('Error', error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
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

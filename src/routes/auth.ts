import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {config} from "../config";
import {IConnectionWrapper} from "../server";

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var crypto = require('crypto');

/**
 * / route
 *
 * @class User
 */
export class AuthRoute extends BaseRoute {

    public static connWrapper: IConnectionWrapper;
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static initialize(router: Router, connWrapper: IConnectionWrapper) {

        AuthRoute.connWrapper = connWrapper;
        //log
        console.log("[AuthRoute::initialize] Creating temp route.");

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().login(req, res, next);
        });

        // router.get("/forgot", (req: Request, res: Response, next: NextFunction) => {
        //     new AuthRoute().forgotpassword(req, res, next);
        // });

        router.post("/updpass", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().updatePass(req, res, next);
        });

        router.get("/fgpassemail", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().emailForForgotPass(req, res, next);
        });
    }

    constructor() {
        super();
    }

    public login(req: Request, res: Response, next: NextFunction) {
        console.log('Auth login route',req.body);
        console.log(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`);
        var query = AuthRoute.connWrapper.getConn().query(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                // console.log(result[0], result[0].PASSWORD);
                // console.log(bcrypt.compareSync(req.body.pass, result[0].PASSWORD));
                // console.log(jwt.sign({pass:result[0].PASSWORD}, config.jwtsecret));
                if (result[0] &&
                    result[0].PASSWORD &&
                    bcrypt.compareSync(req.body.pass, result[0].PASSWORD)) {
                    res.json({token: jwt.sign({pass:result[0].PASSWORD}, config.jwtsecret)})
                }
                else {
                    res.json({error:'Wrong Email or Password '});
                }
            }
        });
    }

    public emailForForgotPass (req: Request, res: Response, next: NextFunction) {
        console.log('Auth forgotpassword route',req.query.email);

        var query = AuthRoute.connWrapper.getConn().query(`SELECT * FROM USER WHERE EMAIL='${req.query.email}'`, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else if (result.length > 0) {
                // this.sendForgotPassEmail(req.query.email,1);
                let email = req.query.email;
                let userid = 1;

                let options = {
                    auth: {
                        api_key: config.sg_api_key
                    }
                }

                // confirmation email will expire after 24 hours
                var expirationDate = new Date().getTime() + 24 * 3600 * 1000;

                var hash = this.encrypt(`{"expired":${expirationDate},"email":"${email}"}`);
                console.log(hash);

                let transporter = nodemailer.createTransport(sgTransport(options));

                // setup email data with unicode symbols
                let mailOptions = {
                    from: config.from_email, // sender address
                    to: email, // list of receivers
                    subject: 'Forgot password', // Subject line
                    // html: `${config.api_url}/check?key=${hash}` // html body
                    html: `${config.client_url_prod}/#/newpass?key=${hash}` // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        // deferred.reject(error.name + ': ' + error.message);
                        console.log('Error',error);
                        res.json({error: error});
                        return;
                    }
                    res.json({result: 'Email successfully sended. Check your mail box.'});
                    console.log('Message %s sent: %s', info.messageId, info.response);
                });
            } else {
                res.json({error: 'Email not register.'})
            }
        });


    }

    public updatePass(req: Request, res: Response, next: NextFunction) {
        console.log('Auth forgotpassword route',req.body);
        if (!req.body.key) {
            return res.json({error: 'Wrong security key'});
        }
        let json = this.decrypt(req.body.key);
        let obj = JSON.parse(json);
        console.log(obj);
        let newPassword = req.body.pass;
        if (obj.email && obj.expired) {
            var now = new Date().getTime();
            if ( now < obj.expired){
                console.log('todo update password in db',bcrypt.hashSync(newPassword, 4));
                var query = AuthRoute.connWrapper.getConn().query(`UPDATE USER SET ? WHERE EMAIL = '${obj.email}'`,
                    {PASSWORD:bcrypt.hashSync(newPassword, 4)}, (err, result) => {
                    console.log(err);
                    console.log(result);
                    if (err) {
                        res.json({error:err})
                    } else {
                        res.json({result:'Password updated. Go to login page.'})
                    }
                });
            } else {
                console.log('Key is expired');
                res.json({error:'Key is expired'})
            }
        }
        else {
            console.log('Wrong key');
            res.json({error:'Wrong key'})
        }
    }

    encrypt(text) {
        let cipher = crypto.createCipher(config.crypto_algorithm, config.crypto_secret)
        let crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }

    decrypt(text) {
        let decipher = crypto.createDecipher(config.crypto_algorithm, config.crypto_secret)
        let dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }
}
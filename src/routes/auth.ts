import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {config} from "../config";
import {IConnectionWrapper} from "../server";

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
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

        router.get("/forgot", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().forgotpassword(req, res, next);
        });

        router.get("/chcode", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().checkSecretCodeFromEmail(req, res, next);
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
                console.log(result[0], result[0].PASSWORD);
                console.log(bcrypt.compareSync(req.body.pass, result[0].PASSWORD));
                console.log(jwt.sign({pass:result[0].PASSWORD}, config.jwtsecret));
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

    public forgotpassword (req: Request, res: Response, next: NextFunction) {
        console.log('Auth forgotpassword route');
        //
        // let hash = bcrypt.hashSync(password, 10);
        // todo send email with secret code
        this.sendForgotPassEmail('gvkr@tvchd.com',1);
    }

    public checkSecretCodeFromEmail(req: Request, res: Response, next: NextFunction) {

    }

    sendForgotPassEmail(email,userid){
        // confirmation email will expire after 24 hours
        var expirationDate = new Date().getTime() + 24 * 3600 * 1000;

        var hash = this.encrypt(`{"expired":${expirationDate},"email":"${email}"}`);
        console.log(hash);

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.gmail_user,
                pass: config.gmail_password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '', // sender address
            to: email, // list of receivers
            subject: 'Email confirmation',           // Subject line
            // text: 'Hello world ?' + hash, // plain text body
            html: `${config.apiUrl}/forgotpass?key=${hash}` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                // deferred.reject(error.name + ': ' + error.message);
                return console.log('Error',error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
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
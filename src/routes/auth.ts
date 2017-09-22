import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {config} from "../config";

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/**
 * / route
 *
 * @class User
 */
export class AuthRoute extends BaseRoute {

    public static connection : mysql.IConnection;
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static initialize(router: Router, connection: mysql.IConnection) {

        AuthRoute.connection = connection;
        //log
        console.log("[AuthRoute::initialize] Creating temp route.");

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().login(req, res, next);
        });

        router.get("/forgot", (req: Request, res: Response, next: NextFunction) => {
            new AuthRoute().forgotpassword(req, res, next);
        });

    }

    constructor() {
        super();
    }

    public login(req: Request, res: Response, next: NextFunction) {
        console.log('Auth login route',req.body);
        console.log(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`);
        var query = AuthRoute.connection.query(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`, (err, result) => {
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
    }
}
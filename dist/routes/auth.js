"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const config_1 = require("../config");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
class AuthRoute extends route_1.BaseRoute {
    static initialize(router, connection) {
        AuthRoute.connection = connection;
        console.log("[AuthRoute::initialize] Creating temp route.");
        router.post("/", (req, res, next) => {
            new AuthRoute().login(req, res, next);
        });
        router.get("/forgot", (req, res, next) => {
            new AuthRoute().forgotpassword(req, res, next);
        });
    }
    constructor() {
        super();
    }
    login(req, res, next) {
        console.log('Auth login route', req.body);
        console.log(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`);
        var query = AuthRoute.connection.query(`SELECT * FROM USER WHERE EMAIL='${req.body.email}' AND USERTYPE_ID=3`, (err, result) => {
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
    }
}
exports.AuthRoute = AuthRoute;

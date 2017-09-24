"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class UtilsRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        UtilsRoute.connWrapper = connWrapper;
        console.log("[GenRequestRoute::initialize] Creating temp route.");
        router.get("/consumer", (req, res, next) => {
            new UtilsRoute().consumer(req, res, next);
        });
        router.get("/status", (req, res, next) => {
            new UtilsRoute().status(req, res, next);
        });
        router.get("/image", (req, res, next) => {
            new UtilsRoute().image(req, res, next);
        });
        router.get("/foodcatrgory", (req, res, next) => {
            new UtilsRoute().foodcatrgory(req, res, next);
        });
    }
    constructor() {
        super();
    }
    consumer(req, res, next) {
        console.log("Chef index route");
        console.log('cunsomer');
        var query = UtilsRoute.connWrapper.getConn().query('SELECT CONSUMER.CID, USER.NAME \n' +
            'FROM CONSUMER \n' +
            'LEFT JOIN USER ON USER.UID=CONSUMER.USERID', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(o => { return { id: o.CID, name: o.NAME }; }) });
            }
        });
    }
    status(req, res, next) {
        console.log("Chef index route");
        console.log('cunsomer');
        var query = UtilsRoute.connWrapper.getConn().query('SELECT * FROM status', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(o => { return { id: o.ID, name: o.NAME }; }) });
            }
        });
    }
    image(req, res, next) {
        console.log('Images');
        var query = UtilsRoute.connWrapper.getConn().query('SELECT * FROM images', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(o => { return { id: o.IID, path: o.PATH }; }) });
            }
        });
    }
    foodcatrgory(req, res, next) {
        console.log('Foodcategor');
        var query = UtilsRoute.connWrapper.getConn().query('SELECT * FROM foodcatrgory', (err, result) => {
            console.log(err);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(o => { return { id: o.FCID, name: o.NAME }; }) });
            }
        });
    }
}
exports.UtilsRoute = UtilsRoute;

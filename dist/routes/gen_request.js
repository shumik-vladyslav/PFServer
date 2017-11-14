"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class GenRequestRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        GenRequestRoute.connWrapper = connWrapper;
        console.log("[GenRequestRoute::initialize] Creating temp route.");
        router.get("/", (req, res, next) => {
            new GenRequestRoute().index(req, res, next);
        });
        router.post("/", (req, res, next) => {
            new GenRequestRoute().create(req, res, next);
        });
        router.get("/:id", (req, res, next) => {
            new GenRequestRoute().read(req, res, next);
        });
        router.patch("/", (req, res, next) => {
            new GenRequestRoute().update(req, res, next);
        });
        router.delete("/:id", (req, res, next) => {
            new GenRequestRoute().delete(req, res, next);
        });
    }
    fieldsToClientFormat(genreq) {
        return {
            id: genreq.GRID,
            consumer_cid: genreq.CONSUMER_CID,
            req_time: genreq.REQUESTTIME,
            req_details: genreq.REQUESTDETAILS,
            req_subject: genreq.REQUESTSUBJECT,
            status: genreq.STATUS,
            lon: genreq.LONGT,
            lat: genreq.LAT,
        };
    }
    fieldsToDBFormat(genreq) {
        return {
            GRID: genreq.id,
            CONSUMER_CID: genreq.consumer_cid,
            REQUESTTIME: genreq.req_time,
            REQUESTDETAILS: genreq.req_details,
            REQUESTSUBJECT: genreq.req_subject,
            STATUS: genreq.status,
            LONGT: genreq.lon,
            LAT: genreq.lat,
        };
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        console.log("GenReq index route");
        var query = GenRequestRoute.connWrapper.getConn().query('SELECT * FROM GENERALREQUEST ', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(chef => this.fieldsToClientFormat(chef)) });
            }
        });
    }
    create(req, res, next) {
        console.log("GenReq create route");
        let genreq = this.fieldsToDBFormat(req.body);
        genreq.REQUESTTIME = new Date().toISOString().substring(0, 19).replace('T', ' ');
        var query = GenRequestRoute.connWrapper.getConn().query('INSERT INTO GENERALREQUEST SET ?', genreq, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result });
            }
        });
    }
    read(req, res, next) {
        console.log("GenReq read route", req.params.id);
        var query = GenRequestRoute.connWrapper.getConn().query('SELECT * FROM GENERALREQUEST WHERE GRID=' + req.params.id, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(chef => this.fieldsToClientFormat(chef)) });
            }
        });
    }
    update(req, res, next) {
        console.log("GenReq update route", req.params.id);
        delete req.body.req_time;
        var query = GenRequestRoute.connWrapper.getConn().query('UPDATE GENERALREQUEST SET ? WHERE GRID= ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result });
            }
        });
    }
    delete(req, res, next) {
        console.log("GenReq delete route", req.params.id);
        var query = GenRequestRoute.connWrapper.getConn().query('DELETE FROM GENERALREQUEST WHERE GRID=' + req.params.id, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result });
            }
        });
    }
}
exports.GenRequestRoute = GenRequestRoute;

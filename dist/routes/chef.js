"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class ChefRoute extends route_1.BaseRoute {
    static initialize(router, connection) {
        ChefRoute.connection = connection;
        console.log("[ChefRoute::initialize] Creating chef route.");
        router.get("/", (req, res, next) => {
            new ChefRoute().index(req, res, next);
        });
        router.post("/", (req, res, next) => {
            new ChefRoute().create(req, res, next);
        });
        router.get("/:id", (req, res, next) => {
            new ChefRoute().read(req, res, next);
        });
        router.patch("/", (req, res, next) => {
            new ChefRoute().update(req, res, next);
        });
        router.delete("/:id", (req, res, next) => {
            new ChefRoute().delete(req, res, next);
        });
    }
    constructor() {
        super();
    }
    fieldsToClientFormat(chef) {
        return {
            id: chef.SPID,
            user_uid: chef.USER_UID,
            average_rating: chef.AVERAGERATING,
            is_active: chef.ISACTIVE,
            description: chef.DESCRIPTION
        };
    }
    fieldsToDBFormat(chef) {
        return {
            SPID: chef.id,
            USER_UID: chef.user_uid,
            AVERAGERATING: chef.average_rating,
            ISACTIVE: chef.is_active,
            DESCRIPTION: chef.description
        };
    }
    index(req, res, next) {
        console.log("Chef index route");
        var query = ChefRoute.connection.query('SELECT * FROM SERVICEPROVIDER WHERE 1', (err, result) => {
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
        console.log("Chef create route");
        console.log(req.body);
        let chef = this.fieldsToDBFormat(req.body);
        var query = ChefRoute.connection.query('INSERT INTO SERVICEPROVIDER SET ?', chef, (err, result) => {
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
        console.log("Chef read route", req.params.id);
        var query = ChefRoute.connection.query('SELECT * FROM SERVICEPROVIDER WHERE SPID=' + req.params.id, (err, result) => {
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
        console.log("Chef update route", req.body);
        var query = ChefRoute.connection.query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
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
        console.log("Chef delete route", req.params.id);
        var query = ChefRoute.connection.query('DELETE FROM SERVICEPROVIDER WHERE SPID=' + req.params.id, (err, result) => {
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
exports.ChefRoute = ChefRoute;

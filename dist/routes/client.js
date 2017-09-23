"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class ClientRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        this.connWrapper = connWrapper;
        console.log("[UserRoute::initialize] Creating temp route.");
        router.get("/", (req, res, next) => {
            new ClientRoute().index(req, res, next);
        });
        router.post("/", (req, res, next) => {
            new ClientRoute().create(req, res, next);
        });
        router.get("/:id", (req, res, next) => {
            new ClientRoute().read(req, res, next);
        });
        router.patch("/:id", (req, res, next) => {
            new ClientRoute().update(req, res, next);
        });
        router.delete("/:id", (req, res, next) => {
            new ClientRoute().delete(req, res, next);
        });
        router.post("/login", (req, res, next) => {
            new ClientRoute().login(req, res, next);
        });
        router.post("/forgotpassword", (req, res, next) => {
            new ClientRoute().forgotpassword(req, res, next);
        });
    }
    fieldsToClientFormat(client) {
        return {
            id: client.UID,
            name: client.NAME,
            email: client.EMAIL,
            phone_number: client.PHONENUMBER,
            password: client.PASSWORD,
            createdby: client.CREATEDBY,
            creation_time: client.CREATIONTIME,
            last_modify_by: client.LASTMODIFYBY,
            last_modify_time: client.LASTMODIFYTIME,
            password_lastmodify: client.PASSWORDLASTMODIFY,
            usertype_id: client.USERTYPE_ID,
            images_iid: client.IMAGES_IID,
            lon: client.LONG,
            lat: client.LAT
        };
    }
    fieldsToDBFormat(client) {
        return {
            UID: client.id,
            NAME: client.name,
            EMAIL: client.email,
            PHONENUMBER: client.phone_number,
            PASSWORD: client.password,
            CREATEDBY: client.createdby,
            CREATIONTIME: client.creation_time,
            LASTMODIFYBY: client.last_modify_by,
            LASTMODIFYTIME: client.last_modify_time,
            PASSWORDLASTMODIFY: client.password_lastmodify,
            USERTYPE_ID: client.usertype_id,
            IMAGES_IID: client.images_iid,
            LONG: client.lon,
            LAT: client.lat
        };
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        console.log("User index route");
        var query = ClientRoute.connWrapper.getConn().query('SELECT * FROM USER WHERE USER.USERTYPE_ID = 2', (err, result) => {
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
        console.log("User create route");
        console.log("Chef create route");
        console.log(req.body);
        var query = ClientRoute.connWrapper.getConn().query('INSERT INTO USER SET ?', req.body, (err, result) => {
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
        var query = ClientRoute.connWrapper.getConn().query('SELECT * FROM USER WHERE UID=' + req.params.id, (err, result) => {
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
        console.log("User update route", req.params.id);
        var query = ClientRoute.connWrapper.getConn().query('UPDATE USER SET ? WHERE UID = ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
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
        console.log("User delete route", req.params.id);
        var query = ClientRoute.connWrapper.getConn().query('DELETE FROM USER WHERE UID=' + req.params.id, (err, result) => {
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
    login(req, res, next) {
        console.log("User login route", req.params.id);
    }
    forgotpassword(req, res, next) {
        console.log("User forgotpassword route", req.params.id);
    }
    handleQuery(err, result, res) {
        console.log(err);
        console.log(result);
        if (err) {
            res.json({ error: err });
        }
        else {
            res.json({ result: result.map(chef => this.fieldsToClientFormat(chef)) });
        }
    }
}
exports.ClientRoute = ClientRoute;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
var bcrypt = require('bcryptjs');
class ChefRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        ChefRoute.connWrapper = connWrapper;
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
            description: chef.DESCRIPTION,
            name: chef.NAME,
            email: chef.EMAIL,
            phone_number: chef.PHONENUMBER,
            password: chef.PASSWORD,
            createdby: chef.CREATEDBY,
            creation_time: chef.CREATIONTIME,
            last_modify_by: chef.LASTMODIFYBY,
            last_modify_time: chef.LASTMODIFYTIME,
            password_lastmodify: chef.PASSWORDLASTMODIFY,
            usertype_id: chef.USERTYPE_ID,
            images_iid: chef.IMAGES_IID,
            image_path: chef.PATH,
            lon: chef.LONG,
            lat: chef.LAT
        };
    }
    fieldsToDBFormat(chef) {
        return {
            SPID: chef.id,
            USER_UID: chef.user_uid,
            AVERAGERATING: chef.average_rating,
            ISACTIVE: chef.is_active,
            DESCRIPTION: chef.description,
            NAME: chef.name,
            EMAIL: chef.email,
            PHONENUMBER: chef.phone_number,
            PASSWORD: chef.password,
            CREATEDBY: chef.createdby,
            CREATIONTIME: chef.creation_time,
            LASTMODIFYBY: chef.last_modify_by,
            LASTMODIFYTIME: chef.last_modify_time,
            PASSWORDLASTMODIFY: chef.password_lastmodify,
            USERTYPE_ID: chef.usertype_id,
            IMAGES_IID: chef.images_iid,
            LONG: chef.lon,
            LAT: chef.lat
        };
    }
    fieldsToDBUser(chef) {
        return {
            NAME: chef.name,
            EMAIL: chef.email,
            PHONENUMBER: chef.phone_number,
            PASSWORD: chef.password,
            CREATEDBY: chef.createdby,
            CREATIONTIME: chef.creation_time,
            LASTMODIFYBY: chef.last_modify_by,
            LASTMODIFYTIME: chef.last_modify_time,
            PASSWORDLASTMODIFY: chef.password_lastmodify,
            USERTYPE_ID: 1,
            IMAGES_IID: chef.images_iid,
            LONG: chef.lon,
            LAT: chef.lat
        };
    }
    fieldsToDBServiceprovider(chef) {
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
        var query = ChefRoute.connWrapper.getConn().query('SELECT *, SERVICEPROVIDER.*, IMAGES.PATH FROM USER ' +
            'LEFT JOIN SERVICEPROVIDER ON SERVICEPROVIDER.USER_UID = USER.UID ' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID ' +
            'WHERE USER.USERTYPE_ID = 1', (err, result) => {
            console.log(err);
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
        chef.USERTYPE_ID = 1;
        delete chef.USER_UID;
        delete chef.SPID;
        var query = ChefRoute.connWrapper.getConn().query('INSERT INTO USER SET ?', this.fieldsToDBUser(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                let chef = this.fieldsToDBServiceprovider(req.body);
                chef.USER_UID = result.insertId;
                console.log('try to create chef', chef);
                var query = ChefRoute.connWrapper.getConn().query('INSERT INTO SERVICEPROVIDER SET ?', chef, (err, result) => {
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
        });
    }
    read(req, res, next) {
        console.log("Chef read route", req.params.id);
        var query = ChefRoute.connWrapper.getConn().query('SELECT *, SERVICEPROVIDER.*,IMAGES.PATH FROM USER  ' +
            'LEFT JOIN SERVICEPROVIDER ON SERVICEPROVIDER.USER_UID = USER.UID  ' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID  ' +
            'WHERE USER.USERTYPE_ID = 1 AND SPID=' + req.params.id, (err, result) => {
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
        delete req.body.creation_time;
        req.body.password = bcrypt.hashSync(req.body.password, 4);
        var query = ChefRoute.connWrapper.getConn().query('UPDATE USER SET ? WHERE UID=' + req.body.user_uid, this.fieldsToDBUser(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                console.log('try to update chef');
                var query = ChefRoute.connWrapper.getConn().query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = ' + req.body.id, this.fieldsToDBServiceprovider(req.body), (err, result) => {
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
        });
    }
    delete(req, res, next) {
        console.log("Chef delete route", req.params.id);
        let params = req.params.id.split('|');
        console.log('try to delete chef', params);
        var query = ChefRoute.connWrapper.getConn().query('DELETE FROM SERVICEPROVIDER WHERE SPID=' + params[0], (err, result) => {
            var query = ChefRoute.connWrapper.getConn().query('DELETE FROM USER WHERE UID=' + params[1], (err, result) => {
                console.log(err);
                console.log(result);
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ result: result });
                }
            });
        });
    }
}
exports.ChefRoute = ChefRoute;

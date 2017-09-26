"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const utils_1 = require("../utils");
const config_1 = require("../config");
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
        if (!req.files || !req.files.image) {
            utils_1.Utils.InsertImage(ChefRoute.connWrapper.getConn(), config_1.config.dish_img_stub_url).then((insertedId) => {
                req.body.images_iid = insertedId;
                let user = this.fieldsToDBUser(req.body);
                return this.insertUser(ChefRoute.connWrapper.getConn(), user);
            }).then((userInsertedId) => {
                let chef = this.fieldsToDBServiceprovider(req.body);
                chef.USER_UID = userInsertedId;
                delete chef.SPID;
                return this.insertServiceProvider(ChefRoute.connWrapper.getConn(), chef);
            }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
            return;
        }
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        utils_1.Utils.Aws_s3_upload_file(fileName, file.data).then((url) => utils_1.Utils.InsertImage(ChefRoute.connWrapper.getConn(), url)).then((insertedId) => {
            req.body.images_iid = insertedId;
            let user = this.fieldsToDBUser(req.body);
            return this.insertUser(ChefRoute.connWrapper.getConn(), user);
        }).then((userInsertedId) => {
            let chef = this.fieldsToDBServiceprovider(req.body);
            chef.USER_UID = userInsertedId;
            delete chef.SPID;
            return this.insertServiceProvider(ChefRoute.connWrapper.getConn(), chef);
        }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
    }
    insertUser(conn, user) {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO USER SET ?', user, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.insertId);
            });
        });
    }
    insertServiceProvider(conn, chef) {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO SERVICEPROVIDER SET ?', chef, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
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
    updateUser(conn, id, user) {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE USER SET ? WHERE UID=' + id, user, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.insertId);
            });
        });
    }
    updateServiceProvider(conn, id, chef) {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = ' + id, chef, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
    update(req, res, next) {
        console.log("Chef update route", req.body);
        delete req.body.creation_time;
        if (!req.files || !req.files.image) {
            console.log('file is not exist');
            let user = this.fieldsToDBUser(req.body);
            this.updateUser(ChefRoute.connWrapper.getConn(), req.body.user_uid, user)
                .then((result) => this.updateUser(ChefRoute.connWrapper.getConn(), req.body.id, this.fieldsToDBServiceprovider(req.body))).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
            return;
        }
        console.log('file is exist');
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        utils_1.Utils.Aws_s3_upload_file(fileName, file.data).then((url) => utils_1.Utils.InsertImage(ChefRoute.connWrapper.getConn(), url)).then((insertedId) => {
            req.body.images_iid = insertedId;
            let user = this.fieldsToDBUser(req.body);
            return this.updateUser(ChefRoute.connWrapper.getConn(), req.body.user_uid, user);
        }).then((result) => this.updateServiceProvider(ChefRoute.connWrapper.getConn(), req.body.id, this.fieldsToDBServiceprovider(req.body))).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
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

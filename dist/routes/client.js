"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const utils_1 = require("../utils");
const config_1 = require("../config");
var bcrypt = require('bcryptjs');
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
        router.patch("/", (req, res, next) => {
            new ClientRoute().update(req, res, next);
        });
        router.patch("/block", (req, res, next) => {
            new ClientRoute().block(req, res, next);
        });
        router.patch("/unblock", (req, res, next) => {
            new ClientRoute().unblock(req, res, next);
        });
        router.delete("/:id", (req, res, next) => {
            new ClientRoute().delete(req, res, next);
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
            image_path: client.PATH,
            lon: client.LONG,
            lat: client.LAT,
            block: client.BLOCK,
            blockreason: client.BLOCKREASON,
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
            USERTYPE_ID: 2,
            IMAGES_IID: client.images_iid,
            LONG: client.lon,
            LAT: client.lat,
            BLOCK: client.block,
            BLOCKREASON: client.blockreason
        };
    }
    constructor() {
        super();
    }
    block(req, res, next) {
        console.log("Block client");
        this.updateClient(ClientRoute.connWrapper.getConn(), req.body.id, { BLOCK: 1, BLOCKREASON: req.body.blockreason })
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json({ err: err }));
    }
    unblock(req, res, next) {
        console.log("Unblock client");
        this.updateClient(ClientRoute.connWrapper.getConn(), req.body.id, { BLOCK: 0, BLOCKREASON: '' })
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json({ err: err }));
    }
    index(req, res, next) {
        console.log("User index route");
        var query = ClientRoute.connWrapper.getConn().query('SELECT *, IMAGES.PATH FROM USER \n' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID \n' +
            'WHERE USER.USERTYPE_ID = 2', (err, result) => {
            console.log(err);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(chef => this.fieldsToClientFormat(chef)) });
            }
        });
    }
    insertClient(conn, client) {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO USER SET ?', client, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.insertId);
            });
        });
    }
    insertConsumer(conn, consumer) {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO consumer SET ?', consumer, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
    create(req, res, next) {
        if (!req.files || !req.files.image) {
            utils_1.Utils.InsertImage(ClientRoute.connWrapper.getConn(), config_1.config.human_img_stub_url).then((insertedId) => {
                req.body.images_iid = insertedId;
                let client = this.fieldsToDBFormat(req.body);
                return this.insertClient(ClientRoute.connWrapper.getConn(), client);
            }).then((insertedId) => {
                console.log('User inserted id', insertedId);
                this.insertConsumer(ClientRoute.connWrapper.getConn(), { USERID: insertedId });
            }).then((result) => {
                console.log('Cunsomer insert result ', result);
                res.json({ result: result });
            }).catch((err) => res.json({ err: err }));
            return;
        }
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        utils_1.Utils.Aws_s3_upload_file(fileName, file.data).then((url) => utils_1.Utils.InsertImage(ClientRoute.connWrapper.getConn(), url)).then((insertedId) => {
            console.log('User inserted id', insertedId);
            req.body.images_iid = insertedId;
            let dish = this.fieldsToDBFormat(req.body);
            return this.insertClient(ClientRoute.connWrapper.getConn(), dish);
        }).then((insertedId) => {
            console.log('User inserted id', insertedId);
            this.insertConsumer(ClientRoute.connWrapper.getConn(), { USERID: insertedId });
        }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
    }
    read(req, res, next) {
        console.log("Chef read route", req.params.id);
        var query = ClientRoute.connWrapper.getConn().query('SELECT *,IMAGES.PATH FROM USER \n' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID \n' +
            'WHERE UID=' + req.params.id, (err, result) => {
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
    updateClient(conn, id, client) {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE USER SET ? WHERE UID = ' + id, client, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
    update(req, res, next) {
        console.log(req.files);
        if (!req.files || !req.files.image) {
            console.log('file is not exist');
            console.log(req.body);
            this.updateClient(ClientRoute.connWrapper.getConn(), req.body.id, this.fieldsToDBFormat(req.body))
                .then((result) => res.json({ result: result }))
                .catch(err => res.json({ err: err }));
            return;
        }
        console.log('file is exist');
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        utils_1.Utils.Aws_s3_upload_file(fileName, file.data).then((url) => utils_1.Utils.InsertImage(ClientRoute.connWrapper.getConn(), url)).then((insertedId) => {
            req.body.images_iid = insertedId;
            let dish = this.fieldsToDBFormat(req.body);
            return this.updateClient(ClientRoute.connWrapper.getConn(), req.body.id, dish);
        }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
    }
    deleteConsumer(conn, id) {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM consumer WHERE USERID=' + id, (err, result) => {
                if (err) {
                    console.log('delete error', err);
                    reject(err);
                }
                else
                    resolve(result.insertId);
            });
        });
    }
    delete(req, res, next) {
        console.log("User delete route", req.params.id);
        this.deleteConsumer(ClientRoute.connWrapper.getConn(), req.params.id)
            .then(() => {
            ClientRoute.connWrapper.getConn().query('DELETE FROM USER WHERE UID=' + req.params.id, (err, result) => {
                console.log(err);
                console.log(result);
                if (err) {
                    res.json({ error: err });
                }
                else {
                    res.json({ result: result });
                }
            });
        })
            .catch((err) => res.json({ err: err }));
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const config_1 = require("../config");
const utils_1 = require("../utils");
var cloudinary = require('cloudinary');
var streamBuffers = require('stream-buffers');
class DishRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        DishRoute.connWrapper = connWrapper;
        console.log("[DishRoute::initialize] Creating dish route.");
        router.get("/", (req, res, next) => {
            new DishRoute().index(req, res, next);
        });
        router.post("/", (req, res, next) => {
            new DishRoute().create(req, res, next);
        });
        router.get("/:id", (req, res, next) => {
            new DishRoute().read(req, res, next);
        });
        router.patch("/", (req, res, next) => {
            new DishRoute().update(req, res, next);
        });
        router.delete("/:id", (req, res, next) => {
            new DishRoute().delete(req, res, next);
        });
    }
    fieldsToClientFormat(dish) {
        return {
            id: dish.DID,
            serviceprovider_spid: dish.SERVICEPROVIDER_SPID,
            images_iid: dish.IMAGES_IID,
            name: dish.NAME,
            available: dish.AVAILABLE,
            creation: dish.CREATION,
            lastmodifytime: dish.LASTMODIFYTIME,
            discription: dish.DISCRIPTION,
            price: dish.PRICE,
            foodcatrgory_fcid: dish.FOODCATRGORY_FCID,
            image_path: dish.PATH,
            cat_name: dish.CAT_NAME
        };
    }
    fieldsToDBFormat(dish) {
        return {
            DID: dish.id,
            SERVICEPROVIDER_SPID: dish.serviceprovider_spid,
            IMAGES_IID: dish.images_iid,
            NAME: dish.name,
            AVAILABLE: dish.available,
            CREATION: dish.creation,
            LASTMODIFYTIME: dish.lastmodifytime,
            DISCRIPTION: dish.discription,
            PRICE: dish.price,
            FOODCATRGORY_FCID: dish.foodcatrgory_fcid,
        };
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        console.log("Dish index route", req.originalUrl.split('/'));
        let chefId = req.originalUrl.split('/')[2];
        let queryStr;
        console.log(chefId, +chefId);
        if (chefId && +chefId) {
            queryStr = 'SELECT *, DISH.NAME, IMAGES.PATH, FOODCATRGORY.NAME AS CAT_NAME FROM DISH ' +
                'LEFT JOIN IMAGES ON IMAGES.IID=DISH.IMAGES_IID ' +
                'LEFT JOIN FOODCATRGORY ON FOODCATRGORY.FCID=DISH.FOODCATRGORY_FCID ' +
                'WHERE SERVICEPROVIDER_SPID=' + chefId;
        }
        else {
            queryStr = 'SELECT *, DISH.NAME, IMAGES.PATH, FOODCATRGORY.NAME AS CAT_NAME FROM DISH ' +
                'LEFT JOIN IMAGES ON IMAGES.IID=DISH.IMAGES_IID ' +
                'LEFT JOIN FOODCATRGORY ON FOODCATRGORY.FCID=DISH.FOODCATRGORY_FCID ' +
                'WHERE 1';
        }
        var query = DishRoute.connWrapper.getConn().query(queryStr, (err, result) => {
            console.log(err);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(chef => this.fieldsToClientFormat(chef)) });
            }
        });
    }
    insertDish(conn, dish) {
        return new Promise((res, rej) => {
            conn.query('INSERT INTO DISH SET ?', dish, (err, result) => {
                if (err)
                    rej(err);
                else
                    res(result.insertId);
            });
        });
    }
    create(req, res, next) {
        if (!req.files || !req.files.image) {
            utils_1.Utils.InsertImage(DishRoute.connWrapper.getConn(), config_1.config.dish_img_stub_url).then((insertedId) => {
                req.body.images_iid = insertedId;
                let dish = this.fieldsToDBFormat(req.body);
                return this.insertDish(DishRoute.connWrapper.getConn(), dish);
            }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
            return;
        }
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        utils_1.Utils.Upload_file_to_hosting(file).then((url) => utils_1.Utils.InsertImage(DishRoute.connWrapper.getConn(), url)).then((insertedId) => {
            req.body.images_iid = insertedId;
            let dish = this.fieldsToDBFormat(req.body);
            return this.insertDish(DishRoute.connWrapper.getConn(), dish);
        }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
    }
    read(req, res, next) {
        console.log("Dish read route", req.params.id);
        var query = DishRoute.connWrapper.getConn().query('SELECT *, DISH.NAME, IMAGES.PATH,FOODCATRGORY.NAME AS CAT_NAME FROM DISH ' +
            'LEFT JOIN IMAGES ON IMAGES.IID=DISH.IMAGES_IID ' +
            'LEFT JOIN FOODCATRGORY ON FOODCATRGORY.FCID=DISH.FOODCATRGORY_FCID ' +
            'WHERE DID=' + req.params.id, (err, result) => {
            console.log(err);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(chef => this.fieldsToClientFormat(chef)) });
            }
        });
    }
    update(req, res, next) {
        delete req.body.creation;
        if (!req.files || !req.files.image) {
            console.log('file is not exist');
            console.log(req.body);
            this.updateDish(DishRoute.connWrapper.getConn(), req.body.id, this.fieldsToDBFormat(req.body))
                .then((result) => res.json({ result: result }))
                .catch(err => res.json({ err: err }));
            return;
        }
        console.log('file is exist');
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];
        utils_1.Utils.Upload_file_to_hosting(file).then((url) => utils_1.Utils.InsertImage(DishRoute.connWrapper.getConn(), url)).then((insertedId) => {
            req.body.images_iid = insertedId;
            let dish = this.fieldsToDBFormat(req.body);
            return this.updateDish(DishRoute.connWrapper.getConn(), req.body.id, dish);
        }).then((result) => res.json({ result: result })).catch((err) => res.json({ err: err }));
    }
    updateDish(conn, id, dish) {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE DISH SET ? WHERE DID= ' + id, dish, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
    delete(req, res, next) {
        console.log("Dish delete route", req.params.id);
        var query = DishRoute.connWrapper.getConn().query('DELETE FROM DISH WHERE DID=' + req.params.id, (err, result) => {
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
exports.DishRoute = DishRoute;

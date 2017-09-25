"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const config_1 = require("../config");
var cloudinary = require('cloudinary');
var streamBuffers = require('stream-buffers');
var AWS = require('aws-sdk');
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
    aws_s3_upload_file(name, buffer, cb) {
        AWS.config.update(config_1.config.aws);
        var s3 = new AWS.S3();
        s3.putObject({
            Bucket: config_1.config.aws_bucket,
            Key: name,
            Body: buffer,
            ACL: 'public-read'
        }, (err, data) => {
            cb(err, data);
            console.log('Successfully uploaded package.', err, data);
        });
    }
    create(req, res, next) {
        let sampleFile = req.files.image;
        const serverFileName = Date.now() + '.' + sampleFile.mimetype.split('/')[1];
        const targetPath = __dirname + '/..' + config_1.config.upload_folder + serverFileName;
        this.aws_s3_upload_file(serverFileName, sampleFile.data, (err, result) => {
            console.log(err, result);
            if (err)
                return res.json({ err: err });
            if (result) {
                const url = 'https://s3.us-east-2.amazonaws.com/heroku-imgs/' + serverFileName;
                console.log(url);
                var query = DishRoute.connWrapper.getConn().query('INSERT INTO IMAGES SET ?', { PATH: url }, (err, result) => {
                    console.log(err);
                    console.log(result);
                    if (err) {
                        return res.json({ error: err });
                    }
                    else {
                        req.body.images_iid = result.insertId;
                        let dish = this.fieldsToDBFormat(req.body);
                        var query = DishRoute.connWrapper.getConn().query('INSERT INTO DISH SET ?', dish, (err, result) => {
                            console.log(err);
                            console.log(result);
                            if (err) {
                                return res.json({ error: err });
                            }
                            else {
                                return res.json({ result: result });
                            }
                        });
                    }
                });
            }
        });
        console.log('end creation');
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
        console.log("Dish update route", req.params.id);
        delete req.body.creation;
        var query = DishRoute.connWrapper.getConn().query('UPDATE DISH SET ? WHERE DID= ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
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

import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {IConnectionWrapper} from "../server";
import {inspect, isNumber} from "util";
import {config} from "../config";
// import {AWSError, S3} from "aws-sdk";
import {Utils} from "../utils";

var cloudinary = require('cloudinary');
var streamBuffers = require('stream-buffers');
// var AWS = require('aws-sdk')
// var formidable = require('formidable');

/**
 * / route
 *
 * @class User
 */
export class DishRoute extends BaseRoute {

    // public static connection : mysql.IConnection;

    public static connWrapper: IConnectionWrapper;

    public static initialize(router: Router, connWrapper: IConnectionWrapper) {

        DishRoute.connWrapper = connWrapper;
        //log
        console.log("[DishRoute::initialize] Creating dish route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new DishRoute().index(req, res, next);
        });

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new DishRoute().create(req, res, next);
        });

        router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            new DishRoute().read(req, res, next);
        });

        router.patch("/", (req: Request, res: Response, next: NextFunction) => {
            new DishRoute().update(req, res, next);
        });

        router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
            new DishRoute().delete(req, res, next);
        });
    }

    fieldsToClientFormat(dish) {
        return {
            id : dish.DID,
            serviceprovider_spid : dish.SERVICEPROVIDER_SPID,
            images_iid : dish.IMAGES_IID,
            name : dish.NAME,
            available : dish.AVAILABLE,
            creation : dish.CREATION,
            lastmodifytime : dish.LASTMODIFYTIME,
            discription : dish.DISCRIPTION,
            price : dish.PRICE,
            foodcatrgory_fcid : dish.FOODCATRGORY_FCID,
            image_path : dish.PATH,
            cat_name: dish.CAT_NAME
        }
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
        }
    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        console.log("Dish index route",req.originalUrl.split('/'));
        let chefId = req.originalUrl.split('/')[2];
        let queryStr;
        console.log(chefId, +chefId);
        if (chefId && +chefId ) {
            queryStr = 'SELECT *, DISH.NAME, IMAGES.PATH, FOODCATRGORY.NAME AS CAT_NAME FROM DISH ' +
                'LEFT JOIN IMAGES ON IMAGES.IID=DISH.IMAGES_IID ' +
                'LEFT JOIN FOODCATRGORY ON FOODCATRGORY.FCID=DISH.FOODCATRGORY_FCID ' +
                'WHERE SERVICEPROVIDER_SPID=' + chefId;
        } else {
            queryStr = 'SELECT *, DISH.NAME, IMAGES.PATH, FOODCATRGORY.NAME AS CAT_NAME FROM DISH ' +
                'LEFT JOIN IMAGES ON IMAGES.IID=DISH.IMAGES_IID ' +
                'LEFT JOIN FOODCATRGORY ON FOODCATRGORY.FCID=DISH.FOODCATRGORY_FCID ' +
                'WHERE 1';
        }

        var query = DishRoute.connWrapper.getConn().query(queryStr, (err, result) => {
            console.log(err);
            // console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(chef => this.fieldsToClientFormat(chef)
                )})
            }
        });
    }


    insertDish(conn,dish): Promise<any> {
        return new Promise ((res, rej) =>
        {
            conn.query('INSERT INTO DISH SET ?', dish, (err, result) => {
                if (err) rej(err)
                else res(result.insertId)
            });
        })
    }

    public create (req, res: Response, next: NextFunction){
        if (!req.files || !req.files.image) {
            Utils.InsertImage(DishRoute.connWrapper.getConn(),config.dish_img_stub_url).then(
                (insertedId) => {
                    req.body.images_iid = insertedId;
                    let dish = this.fieldsToDBFormat(req.body);
                    return this.insertDish(DishRoute.connWrapper.getConn(), dish)}
            ).then(
                (result) => res.json({result: result})
            ).catch(
                (err)=> res.json({err: err}))
            return;
        }

        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];


        Utils.Upload_file_to_hosting(file).then(
            (url) => Utils.InsertImage(DishRoute.connWrapper.getConn(),url)
        ).then(
            (insertedId) => {
                req.body.images_iid = insertedId;
                let dish = this.fieldsToDBFormat(req.body);
                return this.insertDish(DishRoute.connWrapper.getConn(), dish)}
        ).then(
            (result) => res.json({result: result})
        ).catch(
            (err)=> res.json({err: err}))
    }


    public read (req: Request, res: Response, next: NextFunction){
        console.log("Dish read route",req.params.id);
        var query = DishRoute.connWrapper.getConn().query('SELECT *, DISH.NAME, IMAGES.PATH,FOODCATRGORY.NAME AS CAT_NAME FROM DISH ' +
            'LEFT JOIN IMAGES ON IMAGES.IID=DISH.IMAGES_IID ' +
            'LEFT JOIN FOODCATRGORY ON FOODCATRGORY.FCID=DISH.FOODCATRGORY_FCID ' +
            'WHERE DID=' + req.params.id, (err, result) => {
            console.log(err);
            // console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(chef => this.fieldsToClientFormat(chef)
                )})
            }
        });
    }

    public update (req, res: Response, next: NextFunction){
        delete req.body.creation;
        if (!req.files || !req.files.image) {
            console.log('file is not exist')
            // delete req.body.images_iid;
            console.log(req.body);
            this.updateDish(DishRoute.connWrapper.getConn(),req.body.id, this.fieldsToDBFormat(req.body))
                .then(
                (result) => res.json({result: result}))
                .catch (
                err => res.json({err: err}));
            return;
        }
        console.log('file is exist');
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];

        Utils.Upload_file_to_hosting(file).then(
            (url) => Utils.InsertImage(DishRoute.connWrapper.getConn(),url)
        ).then(
            (insertedId) => {
                req.body.images_iid = insertedId;
                let dish = this.fieldsToDBFormat(req.body);
                return this.updateDish(DishRoute.connWrapper.getConn(), req.body.id, dish)}
        ).then(
            (result) => res.json({result: result})
        ).catch(
            (err)=> res.json({err: err}))
    }

    updateDish (conn,id,dish) :Promise<any> {
        return new Promise ((resolve,reject) => {
            conn.query('UPDATE DISH SET ? WHERE DID= ' + id, dish, (err, result) => {
                if (err) reject(err); else resolve(result);
            });
        })
    }

    public delete (req: Request, res: Response, next: NextFunction){
        console.log("Dish delete route",req.params.id);

        var query = DishRoute.connWrapper.getConn().query('DELETE FROM DISH WHERE DID=' + req.params.id, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result})
            }
        });
    }
}
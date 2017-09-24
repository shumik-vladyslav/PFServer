import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {IConnectionWrapper} from "../server";

var bcrypt = require('bcryptjs');

export interface ChefData {
    SPID?: number;
    USER_UID?: number;
    AVERAGERATING: number;
    ISACTIVE: boolean;
    DESCRIPTION: string;
    NAME;
    EMAIL;
    PHONENUMBER;
    PASSWORD;
    CREATEDBY;
    CREATIONTIME;
    LASTMODIFYBY;
    LASTMODIFYTIME;
    PASSWORDLASTMODIFY;
    USERTYPE_ID;
    IMAGES_IID;
    LONG;
    LAT;
}

/**
 * / route
 *
 * @class User
 */
export class ChefRoute extends BaseRoute {

    public static connWrapper: IConnectionWrapper;
    /**
     * Initialize the routes.
     *
     * @class ChefRoute
     * @method initialize
     * @static
     */
    public static initialize(router: Router, connWrapper: IConnectionWrapper) {

        ChefRoute.connWrapper = connWrapper;
        //log
        console.log("[ChefRoute::initialize] Creating chef route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new ChefRoute().index(req, res, next);
        });

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new ChefRoute().create(req, res, next);
        });

        router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            new ChefRoute().read(req, res, next);
        });

        router.patch("/", (req: Request, res: Response, next: NextFunction) => {
            new ChefRoute().update(req, res, next);
        });

        router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
            new ChefRoute().delete(req, res, next);
        });
    }

    /**
     * Constructor
     *
     * @class ChefRoute
     * @constructor
     */
    constructor() {
        super();
    }

    fieldsToClientFormat(chef) {
        return {
            id: chef.SPID,
            user_uid : chef.USER_UID,
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


    fieldsToDBUser (chef) {
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
        }
    }


    /**
     * The home page route.
     *
     * @class ChefRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public index(req: Request, res: Response, next: NextFunction) {
        console.log("Chef index route");

        var query = ChefRoute.connWrapper.getConn().query('SELECT *, SERVICEPROVIDER.*, IMAGES.PATH FROM USER ' +
            'LEFT JOIN SERVICEPROVIDER ON SERVICEPROVIDER.USER_UID = USER.UID ' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID ' +
            'WHERE USER.USERTYPE_ID = 1', (err, result) => {
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

    public create (req: Request, res: Response, next: NextFunction) {
        console.log("Chef create route");
        console.log(req.body);

        let chef: ChefData = this.fieldsToDBFormat(req.body);
        chef.USERTYPE_ID = 1;
        delete chef.USER_UID;
        delete chef.SPID;
        var query = ChefRoute.connWrapper.getConn().query('INSERT INTO USER SET ?', this.fieldsToDBUser(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {

                let chef = this.fieldsToDBServiceprovider(req.body);
                chef.USER_UID = result.insertId;
                console.log('try to create chef',chef);
                var query = ChefRoute.connWrapper.getConn().query('INSERT INTO SERVICEPROVIDER SET ?', chef, (err, result) => {
                    console.log(err);
                    console.log(result);
                    if (err) {
                        res.json({error:err})
                    } else {
                        res.json({result:result})
                    }
                });
            }
        });
    }

    public read (req: Request, res: Response, next: NextFunction) {
        console.log("Chef read route",req.params.id);
        var query = ChefRoute.connWrapper.getConn().query('SELECT *, SERVICEPROVIDER.*,IMAGES.PATH FROM USER  ' +
            'LEFT JOIN SERVICEPROVIDER ON SERVICEPROVIDER.USER_UID = USER.UID  ' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID  ' +
            'WHERE USER.USERTYPE_ID = 1 AND SPID=' + req.params.id, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(chef => this.fieldsToClientFormat(chef)
                )})
            }
        });
    }

    public update (req: Request, res: Response, next: NextFunction) {
        console.log("Chef update route",req.body);
        delete req.body.creation_time;
        req.body.password = bcrypt.hashSync(req.body.password, 4);
        var query = ChefRoute.connWrapper.getConn().query('UPDATE USER SET ? WHERE UID=' + req.body.user_uid, this.fieldsToDBUser(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err});
            } else {
                console.log('try to update chef');
                var query = ChefRoute.connWrapper.getConn().query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = '+ req.body.id,
                    this.fieldsToDBServiceprovider(req.body), (err, result) => {
                    console.log(err);
                    console.log(result);
                    if (err) {
                        res.json({error:err})
                    } else {
                        res.json({result:result})
                    }
                });
            }
        });
    }

    public delete (req: Request, res: Response, next: NextFunction) {
        console.log("Chef delete route",req.params.id);
        let params = req.params.id.split('|');
        console.log('try to delete chef',params);
        var query = ChefRoute.connWrapper.getConn().query('DELETE FROM SERVICEPROVIDER WHERE SPID=' + params[0], (err, result) => {
            var query = ChefRoute.connWrapper.getConn().query('DELETE FROM USER WHERE UID=' + params[1], (err, result) => {
                console.log(err);
                console.log(result);
                if (err) {
                    res.json({error:err})
                } else {
                    res.json({result:result})
                }
            });
        });
    }
}
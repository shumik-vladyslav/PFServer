import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {IConnectionWrapper} from "../server";
import {Utils} from "../utils";
import {config} from "../config";

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

    public create (req, res: Response, next: NextFunction) {
        console.log("Chef create route");
        console.log(req.body);

        if (!req.files || !req.files.image) {
            Utils.InsertImage(ChefRoute.connWrapper.getConn(),config.dish_img_stub_url).then(
                (insertedId) => {
                    req.body.images_iid = insertedId;
                    let user = this.fieldsToDBUser(req.body);
                    return this.insertUser(ChefRoute.connWrapper.getConn(), user)}
            ).then(
                (userInsertedId)=> {
                    let chef = this.fieldsToDBServiceprovider(req.body);
                    chef.USER_UID = userInsertedId;
                    delete chef.SPID;
                    return this.insertServiceProvider(ChefRoute.connWrapper.getConn(),chef);
                }
            ).then(
                (result) => res.json({result: result})
            ).catch(
                (err)=> res.json({err: err}))
            return;
        }

        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];

        Utils.Aws_s3_upload_file(fileName, file.data).then(
            (url) => Utils.InsertImage(ChefRoute.connWrapper.getConn(),url)
        ).then(
            (insertedId) => {
                req.body.images_iid = insertedId;
                let user = this.fieldsToDBUser(req.body);
                return this.insertUser(ChefRoute.connWrapper.getConn(), user)}
        ).then(
            (userInsertedId)=> {
                let chef = this.fieldsToDBServiceprovider(req.body);
                chef.USER_UID = userInsertedId;
                delete chef.SPID;
                return this.insertServiceProvider(ChefRoute.connWrapper.getConn(),chef);
            }
        ).then(
            (result) => res.json({result: result})
        ).catch(
            (err)=> res.json({err: err}))
    }

    insertUser (conn, user): Promise<any> {
        return new Promise ((resolve, reject) => {
            conn.query('INSERT INTO USER SET ?', user, (err, result) => {
                if (err) reject(err)
                else resolve(result.insertId)
            })
        })
    }

    insertServiceProvider(conn, chef): Promise<any> {
        return new Promise ((resolve, reject) => {
                conn.query('INSERT INTO SERVICEPROVIDER SET ?', chef, (err, result) => {
                    if (err) reject(err)
                    else resolve(result)
            });
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

    updateUser (conn, id, user): Promise<any> {
        return new Promise ((resolve, reject) => {
            conn.query('UPDATE USER SET ? WHERE UID=' + id, user, (err, result) => {
                if (err) reject(err)
                else resolve(result.insertId)
            })
        })
    }

    updateServiceProvider(conn, id, chef): Promise<any> {
        return new Promise ((resolve, reject) => {
            conn.query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = ' + id, chef, (err, result) => {
                if (err) reject(err)
                else resolve(result)
            });
        });
    }

    public update (req, res: Response, next: NextFunction) {
        console.log("Chef update route",req.body);
        // delete req.body.creation_time;
        // req.body.password = bcrypt.hashSync(req.body.password, 4);
        // var query = ChefRoute.connWrapper.getConn().query('UPDATE USER SET ? WHERE UID=' + req.body.user_uid, this.fieldsToDBUser(req.body), (err, result) => {
        //     console.log(err);
        //     console.log(result);
        //     if (err) {
        //         res.json({error:err});
        //     } else {
        //         console.log('try to update chef');
        //         var query = ChefRoute.connWrapper.getConn().query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = '+ req.body.id,
        //             this.fieldsToDBServiceprovider(req.body), (err, result) => {
        //             console.log(err);
        //             console.log(result);
        //             if (err) {
        //                 res.json({error:err})
        //             } else {
        //                 res.json({result:result})
        //             }
        //         });
        //     }
        // });
////////////////////
        delete req.body.creation_time;
        // todo password change correct
        // if (pussword_changet)
        //     req.body.password = bcrypt.hashSync(req.body.password, 4);
        if (!req.files || !req.files.image) {
            console.log('file is not exist')
            // delete req.body.images_iid;
            let user = this.fieldsToDBUser(req.body);
            this.updateUser(ChefRoute.connWrapper.getConn(), req.body.user_uid, user)
                .then(
                (result) => this.updateUser(ChefRoute.connWrapper.getConn(), req.body.id,
                    this.fieldsToDBServiceprovider(req.body))
                ).then(
                (result) => res.json({result: result})
                ).catch(
                (err)=> res.json({err: err}))
            return;
        }

        console.log('file is exist');
        let file = req.files.image;
        const fileName = Date.now() + '.' + file.mimetype.split('/')[1];

        Utils.Aws_s3_upload_file(fileName, file.data).then(
            (url) => Utils.InsertImage(ChefRoute.connWrapper.getConn(),url)
        ).then(
            (insertedId) => {
                req.body.images_iid = insertedId;
                let user = this.fieldsToDBUser(req.body);
                return this.updateUser(ChefRoute.connWrapper.getConn(), req.body.user_uid, user)}
        ).then(
            (result) => this.updateServiceProvider(ChefRoute.connWrapper.getConn(), req.body.id,
            this.fieldsToDBServiceprovider(req.body))
        ).then(
            (result) => res.json({result: result})
        ).catch(
            (err)=> res.json({err: err}))
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
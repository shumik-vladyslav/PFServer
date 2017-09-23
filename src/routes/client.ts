import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {IConnectionWrapper} from "../server";

/**
 * / route
 *
 * @class User
 */
export class ClientRoute extends BaseRoute {

    public static connWrapper: IConnectionWrapper;
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static initialize(router: Router, connWrapper: IConnectionWrapper) {

        this.connWrapper = connWrapper;
        //log
        console.log("[UserRoute::initialize] Creating temp route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new ClientRoute().index(req, res, next);
        });

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new ClientRoute().create(req, res, next);
        });

        router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            new ClientRoute().read(req, res, next);
        });

        router.patch("/", (req: Request, res: Response, next: NextFunction) => {
            new ClientRoute().update(req, res, next);
        });

        router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
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

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public index(req: Request, res: Response, next: NextFunction) {
        console.log("User index route");
        var query = ClientRoute.connWrapper.getConn().query('SELECT *,IMAGES.PATH FROM USER \n' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID \n' +
            'WHERE USER.USERTYPE_ID = 2',(err, result) => {
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

    public create (req: Request, res: Response, next: NextFunction) {
        console.log("User create route");
        console.log("Chef create route");
        console.log(req.body);

        var query = ClientRoute.connWrapper.getConn().query('INSERT INTO USER SET ?', req.body, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result})
            }
        });
    }

    public read (req: Request, res: Response, next: NextFunction) {
        console.log("Chef read route",req.params.id);
        var query = ClientRoute.connWrapper.getConn().query('SELECT *,IMAGES.PATH FROM USER \n' +
            'LEFT JOIN IMAGES ON IMAGES.IID=USER.IMAGES_IID \n' +
            'WHERE UID=' + req.params.id, (err, result) => {
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
        console.log("User update route",req.params.id);

        var query = ClientRoute.connWrapper.getConn().query('UPDATE USER SET ? WHERE UID = ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result})
            }
        });
    }

    public delete (req: Request, res: Response, next: NextFunction) {
        console.log("User delete route",req.params.id);
        var query = ClientRoute.connWrapper.getConn().query('DELETE FROM USER WHERE UID=' + req.params.id, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result})
            }
        });
    }
    
    handleQuery(err, result, res) {
        console.log(err);
        console.log(result);
        if (err) {
            res.json({error:err})
        } else {
            res.json({result:result.map(chef => this.fieldsToClientFormat(chef)
            )})
        }
    }
}
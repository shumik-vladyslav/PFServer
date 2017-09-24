import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {IConnectionWrapper} from "../server";

/**
 * / route
 *
 * @class User
 */
export class UtilsRoute extends BaseRoute {

    public static connWrapper: IConnectionWrapper;

    public static initialize(router: Router, connWrapper: IConnectionWrapper) {

        UtilsRoute.connWrapper = connWrapper;
        //log
        console.log("[GenRequestRoute::initialize] Creating temp route.");

        //add home page route
        router.get("/consumer", (req: Request, res: Response, next: NextFunction) => {
            new UtilsRoute().consumer(req, res, next);
        });

        router.get("/status", (req: Request, res: Response, next: NextFunction) => {
            new UtilsRoute().status(req, res, next);
        });

        router.get("/image", (req: Request, res: Response, next: NextFunction) => {
            new UtilsRoute().image(req, res, next);
        });

        router.get("/foodcatrgory", (req: Request, res: Response, next: NextFunction) => {
            new UtilsRoute().foodcatrgory(req, res, next);
        });
    }

    constructor() {
        super();
    }

    public consumer(req: Request, res: Response, next: NextFunction) {
        console.log("Chef index route");
        console.log('cunsomer')
        var query = UtilsRoute.connWrapper.getConn().query('SELECT CONSUMER.CID, USER.NAME \n' +
            'FROM CONSUMER \n' +
            'LEFT JOIN USER ON USER.UID=CONSUMER.USERID', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(o => {return {id: o.CID, name: o.NAME}}
                )})
            }
        });// ChefRoute.connection;
    }

    public status(req: Request, res: Response, next: NextFunction) {
        console.log("Chef index route");
        console.log('cunsomer')
        var query = UtilsRoute.connWrapper.getConn().query('SELECT * FROM status', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(o => {return {id: o.ID, name: o.NAME}}
                )})
            }
        });// ChefRoute.connection;
    }

    public image(req: Request, res: Response, next: NextFunction) {
        console.log('Images')
        var query = UtilsRoute.connWrapper.getConn().query('SELECT * FROM images', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(o => {return {id: o.IID, path: o.PATH}}
                )})
            }
        });// ChefRoute.connection;
    }
    // serviceprovider_spid

    public foodcatrgory(req: Request, res: Response, next: NextFunction) {
        console.log('Foodcategor')
        var query = UtilsRoute.connWrapper.getConn().query('SELECT * FROM foodcatrgory', (err, result) => {
            console.log(err);
            // console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result.map(o => {return {id: o.FCID, name: o.NAME}}
                )})
            }
        });// ChefRoute.connection;
    }
}
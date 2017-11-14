import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";
import {IConnectionWrapper} from "../server";

/**
 * / route
 *
 * @class User
 */
export class GenRequestRoute extends BaseRoute {

    public static connWrapper: IConnectionWrapper;
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static initialize(router: Router, connWrapper: IConnectionWrapper) {

        GenRequestRoute.connWrapper = connWrapper;
        //log
        console.log("[GenRequestRoute::initialize] Creating temp route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new GenRequestRoute().index(req, res, next);
        });

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new GenRequestRoute().create(req, res, next);
        });

        router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            new GenRequestRoute().read(req, res, next);
        });

        router.patch("/", (req: Request, res: Response, next: NextFunction) => {
            new GenRequestRoute().update(req, res, next);
        });

        router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
            new GenRequestRoute().delete(req, res, next);
        });

    }

    fieldsToClientFormat(genreq) {
        return {
            id: genreq.GRID,
            consumer_cid: genreq.CONSUMER_CID,
            req_time: genreq.REQUESTTIME,
            req_details: genreq.REQUESTDETAILS,
            req_subject: genreq.REQUESTSUBJECT,
            status: genreq.STATUS,
            lon: genreq.LONGT,
            lat: genreq.LAT,
        };
    }

    fieldsToDBFormat(genreq) {
        return {
            GRID: genreq.id,
            CONSUMER_CID: genreq.consumer_cid,
            REQUESTTIME: genreq.req_time,
            REQUESTDETAILS: genreq.req_details,
            REQUESTSUBJECT: genreq.req_subject,
            STATUS: genreq.status,
            LONGT: genreq.lon,
            LAT: genreq.lat,

        };
    }

    constructor() {
        super();
    }

    public index(req: Request, res: Response, next: NextFunction) {
        console.log("GenReq index route");

        var query = GenRequestRoute.connWrapper.getConn().query('SELECT * FROM GENERALREQUEST ', (err, result) => {
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

    public create (req: Request, res: Response, next: NextFunction){
        console.log("GenReq create route");

        let genreq = this.fieldsToDBFormat(req.body);
        genreq.REQUESTTIME = new Date().toISOString().substring(0, 19).replace('T', ' ');
        var query = GenRequestRoute.connWrapper.getConn().query('INSERT INTO GENERALREQUEST SET ?', genreq, (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result})
            }
        });
    }

    public read (req: Request, res: Response, next: NextFunction){
        console.log("GenReq read route",req.params.id);
        var query = GenRequestRoute.connWrapper.getConn().query('SELECT * FROM GENERALREQUEST WHERE GRID='+req.params.id, (err, result) => {
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

    public update (req: Request, res: Response, next: NextFunction){
        console.log("GenReq update route",req.params.id);
        delete req.body.req_time;
        var query = GenRequestRoute.connWrapper.getConn().query('UPDATE GENERALREQUEST SET ? WHERE GRID= ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({error:err})
            } else {
                res.json({result:result})
            }
        });
    }

    public delete (req: Request, res: Response, next: NextFunction){
        console.log("GenReq delete route",req.params.id);
        var query = GenRequestRoute.connWrapper.getConn().query('DELETE FROM GENERALREQUEST WHERE GRID=' + req.params.id, (err, result) => {
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
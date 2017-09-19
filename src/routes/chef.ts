import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";

export interface ChefData {
    SPID?: number;
    USER_UID: number;
    AVERAGERATING: number;
    ISACTIVE: boolean;
    DESCRIPTION: string;
}

/**
 * / route
 *
 * @class User
 */
export class ChefRoute extends BaseRoute {

    public static connection : mysql.IConnection;
    /**
     * Initialize the routes.
     *
     * @class ChefRoute
     * @method initialize
     * @static
     */
    public static initialize(router: Router, connection: mysql.IConnection) {

        ChefRoute.connection = connection;
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
            description: chef.DESCRIPTION
        };
    }

    fieldsToDBFormat(chef) {
        return {
            SPID: chef.id,
            USER_UID: chef.user_uid,
            AVERAGERATING: chef.average_rating,
            ISACTIVE: chef.is_active,
            DESCRIPTION: chef.description
        };
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

        try {
            var query = ChefRoute.connection.query('SELECT * FROM SERVICEPROVIDER WHERE 1', (err, result) => {
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
        catch (err) {
            console.log('query error',err);
        }

    }

    public create (req: Request, res: Response, next: NextFunction) {
        console.log("Chef create route");
        console.log(req.body);

        let chef: ChefData = this.fieldsToDBFormat(req.body);

        var query = ChefRoute.connection.query('INSERT INTO SERVICEPROVIDER SET ?', chef, (err, result) => {
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
        var query = ChefRoute.connection.query('SELECT * FROM SERVICEPROVIDER WHERE SPID=' + req.params.id, (err, result) => {
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

        var query = ChefRoute.connection.query('UPDATE SERVICEPROVIDER SET ? WHERE SPID = ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
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
        console.log("Chef delete route",req.params.id);
        var query = ChefRoute.connection.query('DELETE FROM SERVICEPROVIDER WHERE SPID=' + req.params.id, (err, result) => {
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
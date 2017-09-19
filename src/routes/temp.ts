import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";

/**
 * / route
 *
 * @class User
 */
export class TempRoute extends BaseRoute {

    public static connection : mysql.IConnection;
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static initialize(router: Router, connection: mysql.IConnection) {

        TempRoute.connection = connection;
        //log
        console.log("[TempRoutehRoute::initialize] Creating temp route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new TempRoute().index(req, res, next);
        });

        router.post("/", (req: Request, res: Response, next: NextFunction) => {
            new TempRoute().create(req, res, next);
        });

        router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
            new TempRoute().read(req, res, next);
        });

        router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
            new TempRoute().update(req, res, next);
        });

        router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
            new TempRoute().delete(req, res, next);
        });
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
        console.log("Chef index route");

        // ChefRoute.connection;
    }

    public create (req: Request, res: Response, next: NextFunction){
        console.log("Chef create route");
    }

    public read (req: Request, res: Response, next: NextFunction){
        console.log("Chef read route",req.params.id);
    }

    public update (req: Request, res: Response, next: NextFunction){
        console.log("Chef update route",req.params.id);
    }

    public delete (req: Request, res: Response, next: NextFunction){
        console.log("Chef delete route",req.params.id);
    }
}
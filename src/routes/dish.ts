import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import * as mysql from "mysql";

/**
 * / route
 *
 * @class User
 */
export class DishRoute extends BaseRoute {

    public static connection : mysql.IConnection;
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static initialize(router: Router, connection: mysql.IConnection) {

        DishRoute.connection = connection;
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
            image_path : dish.PATH
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
        console.log("Dish index route");

        var query = DishRoute.connection.query('SELECT * FROM DISH WHERE 1', (err, result) => {
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
        console.log("Dish create route");

        console.log(req.body);

        let dish = this.fieldsToDBFormat(req.body);

        var query = DishRoute.connection.query('INSERT INTO DISH SET ?', dish, (err, result) => {
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
        console.log("Dish read route",req.params.id);
        var query = DishRoute.connection.query('SELECT * FROM DISH WHERE DID=' + req.params.id, (err, result) => {
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
        console.log("Dish update route",req.params.id);

        var query = DishRoute.connection.query('UPDATE DISH SET ? WHERE DID = ' + req.body.id, this.fieldsToDBFormat(req.body), (err, result) => {
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
        console.log("Dish delete route",req.params.id);

        var query = DishRoute.connection.query('DELETE FROM DISH WHERE DID=' + req.params.id, (err, result) => {
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
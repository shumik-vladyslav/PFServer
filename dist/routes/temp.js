"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class TempRoute extends route_1.BaseRoute {
    static initialize(router, connection) {
        TempRoute.connection = connection;
        console.log("[TempRoutehRoute::initialize] Creating temp route.");
        router.get("/", (req, res, next) => {
            new TempRoute().index(req, res, next);
        });
        router.post("/", (req, res, next) => {
            new TempRoute().create(req, res, next);
        });
        router.get("/:id", (req, res, next) => {
            new TempRoute().read(req, res, next);
        });
        router.patch("/:id", (req, res, next) => {
            new TempRoute().update(req, res, next);
        });
        router.delete("/:id", (req, res, next) => {
            new TempRoute().delete(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        console.log("Chef index route");
    }
    create(req, res, next) {
        console.log("Chef create route");
    }
    read(req, res, next) {
        console.log("Chef read route", req.params.id);
    }
    update(req, res, next) {
        console.log("Chef update route", req.params.id);
    }
    delete(req, res, next) {
        console.log("Chef delete route", req.params.id);
    }
}
exports.TempRoute = TempRoute;

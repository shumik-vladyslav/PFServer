"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class ConsumerRoute extends route_1.BaseRoute {
    static initialize(router, connWrapper) {
        ConsumerRoute.connWrapper = connWrapper;
        console.log("[GenRequestRoute::initialize] Creating temp route.");
        router.get("/", (req, res, next) => {
            new ConsumerRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        console.log("Chef index route");
        console.log('cunsomer');
        var query = ConsumerRoute.connWrapper.getConn().query('SELECT CONSUMER.CID, USER.NAME \n' +
            'FROM CONSUMER \n' +
            'LEFT JOIN USER ON USER.UID=CONSUMER.USERID', (err, result) => {
            console.log(err);
            console.log(result);
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json({ result: result.map(o => { return { id: o.CID, name: o.NAME }; }) });
            }
        });
    }
}
exports.ConsumerRoute = ConsumerRoute;

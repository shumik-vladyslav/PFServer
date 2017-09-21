"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mysql = require("mysql");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const index_1 = require("./routes/index");
const chef_1 = require("./routes/chef");
const dish_1 = require("./routes/dish");
const client_1 = require("./routes/client");
class Server {
    constructor() {
        this.db_config = {
            host: "us-cdbr-iron-east-05.cleardb.net",
            user: "b3d9ee3a21740f",
            password: "c7a473e1",
            database: "heroku_54ce99cae833691"
        };
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    static bootstrap() {
        return new Server();
    }
    api() {
    }
    config() {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", 'pug');
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "DELETE,PATCH");
            next();
        });
        this.handleDisconnect();
    }
    tempRequest() {
        var query = chef_1.ChefRoute.connection.query('SELECT * FROM SERVICEPROVIDER WHERE 1 LIMIT 1', (err, result) => {
            console.log(err);
        });
    }
    handleDisconnect() {
        console.log('1. connecting to db:');
        this.connection = mysql.createConnection(this.db_config);
        this.connection.connect((err) => {
            if (err) {
                console.log('2. error when connecting to db:', err);
                setTimeout(() => this.handleDisconnect(), 1000);
            }
        });
        this.connection.on('error', (err) => {
            console.log('3. db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                this.handleDisconnect();
            }
            else {
                throw err;
            }
        });
    }
    routes() {
        let router;
        router = express.Router();
        index_1.IndexRoute.create(router);
        this.app.use(router);
        let chefRouter = express.Router();
        chef_1.ChefRoute.initialize(chefRouter, this.connection);
        this.app.use('/chef', chefRouter);
        let dishRouter = express.Router();
        dish_1.DishRoute.initialize(dishRouter, this.connection);
        this.app.use('/chef/:chefId/dish', dishRouter);
        this.app.use('/dish', dishRouter);
        let clientRouter = express.Router();
        client_1.ClientRoute.initialize(clientRouter, this.connection);
        this.app.use('/client', clientRouter);
    }
}
exports.Server = Server;

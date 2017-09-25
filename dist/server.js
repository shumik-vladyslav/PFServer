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
const config_1 = require("./config");
const auth_1 = require("./routes/auth");
const gen_request_1 = require("./routes/gen_request");
const utils_1 = require("./routes/utils");
const fileUpload = require('express-fileupload');
var cors = require('cors');
class IConnectionWrapper {
    getConn() {
        return this.conn;
    }
    setConn(conn) {
        this.conn = conn;
    }
}
exports.IConnectionWrapper = IConnectionWrapper;
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.connectionWrapper = new IConnectionWrapper();
        this.app = express();
        this.config();
        this.routes();
        this.api();
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
        this.app.use(fileUpload());
        this.app.use(cors());
        this.app.use(cookieParser("SECRET_GOES_HERE"));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        this.handleDisconnect();
    }
    handleDisconnect() {
        console.log('1. connecting to db:');
        if (this.connection) {
            this.connection.destroy();
        }
        this.connection = mysql.createConnection(config_1.config.db_config);
        this.connectionWrapper.setConn(this.connection);
        this.connection.connect((err) => {
            if (err) {
                console.log('2. error when connecting to db:', err);
                setTimeout(() => this.handleDisconnect(), 1000);
            }
            else {
                console.log('2-1.connection is established');
            }
        });
        this.connection.on('error', (err) => {
            console.log('3. db error');
            if (err.code === 'PROTOCOL_CONNECTION_LOST' ||
                err.code === 'ECONNRESET') {
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
        chef_1.ChefRoute.initialize(chefRouter, this.connectionWrapper);
        this.app.use('/chef', chefRouter);
        let dishRouter = express.Router();
        dish_1.DishRoute.initialize(dishRouter, this.connectionWrapper);
        this.app.use('/chef/:chefId/dish', dishRouter);
        this.app.use('/dish', dishRouter);
        let clientRouter = express.Router();
        client_1.ClientRoute.initialize(clientRouter, this.connectionWrapper);
        this.app.use('/client', clientRouter);
        let authRouter = express.Router();
        auth_1.AuthRoute.initialize(authRouter, this.connectionWrapper);
        this.app.use('/auth', authRouter);
        let genreqRouter = express.Router();
        gen_request_1.GenRequestRoute.initialize(genreqRouter, this.connectionWrapper);
        this.app.use('/genreq', genreqRouter);
        let utilsRouter = express.Router();
        utils_1.UtilsRoute.initialize(utilsRouter, this.connectionWrapper);
        this.app.use('/utils', utilsRouter);
        this.app.post('/upload', this.uploadImage);
    }
    uploadImage(req, res, next) {
        console.log('upload image');
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
        console.log(req.files);
        let sampleFile = req.files.image;
        sampleFile.mv(__dirname + config_1.config.upload_folder + sampleFile.name, (err) => {
            if (err)
                return res.status(500).send(err);
            res.json({ result: 'File uploaded!' });
        });
    }
    ;
}
exports.Server = Server;

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as mysql from "mysql";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

import { IndexRoute } from "./routes/index";
import { ChefRoute } from "./routes/chef";
import {DishRoute} from "./routes/dish";

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;
  public connection : mysql.IConnection; 
  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();
  }

  /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    //empty for now
  }

  db_config = {
      host: "us-cdbr-iron-east-05.cleardb.net",
      user: "b2bc51e289606e",
      password: "be20cc51",
      database: "heroku_3422c4713e5dc25"
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    //add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    //configure pug
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "pug");

    //mount logger
    this.app.use(logger("dev"));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    //mount cookie parser middleware
    this.app.use(cookieParser("SECRET_GOES_HERE"));

    //mount override?
    this.app.use(methodOverride());

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());

    this.app.use((req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "DELETE,PATCH");
        // res.header("Access-Control-Allow-Methods", "PATCH");
        // res.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        next();
    });

    // configure db connection
    // this.connection = mysql.createConnection({
    //       host: "localhost",
    //       user: "root",
    //       password: "aywcz1q8",
    //       database: "PRODUCTIVEFAMILIES"
    //   });

    this.handleDisconnect();
  }

    handleDisconnect() {
        console.log('1. connecting to db:');
        this.connection = mysql.createConnection(this.db_config); // Recreate the connection, since
                                                        // the old one cannot be reused.

        this.connection.connect(function(err) {              	// The server is either down
            if (err) {                                     // or restarting (takes a while sometimes).
                console.log('2. error when connecting to db:', err);
                setTimeout(this.handleDisconnect, 1000); // We introduce a delay before attempting to reconnect,
            }                                     	// to avoid a hot loop, and to allow our node script to
        });                                     	// process asynchronous requests in the meantime.
        // If you're also serving http, display a 503 error.
        this.connection.on('error', function(err) {
            console.log('3. db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') { 	// Connection to the MySQL server is usually
                this.handleDisconnect();                      	// lost due to either server restart, or a
            } else {                                      	// connnection idle timeout (the wait_timeout
                throw err;                                  // server variable configures this)
            }
        });
    }

  /**
   * Create and return Router.
   *
   * @class Server
   * @method config
   * @return void
   */
  private routes() {
    let router: express.Router;
    router = express.Router();

    //IndexRoute
    IndexRoute.create(router);
    this.app.use(router);

      // ChefRoute
      let chefRouter = express.Router();
      ChefRoute.initialize(chefRouter,this.connection);
      this.app.use('/chef',chefRouter);

    let dishRouter = express.Router();
    DishRoute.initialize(dishRouter,this.connection);
    this.app.use('/chef/:chefId/dish',dishRouter);
  }

}

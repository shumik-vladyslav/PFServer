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
import { DishRoute } from "./routes/dish";
import { ClientRoute } from "./routes/client";
import {config} from "./config";
import {AuthRoute} from "./routes/auth";
import {GenRequestRoute} from "./routes/gen_request";
import {UtilsRoute} from "./routes/utils";
var cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload');
var cors = require('cors');

export class IConnectionWrapper {
    private conn: mysql.IConnection;

    public getConn(): mysql.IConnection {
        return this.conn;
    }

    public setConn(conn:mysql.IConnection):void {
        this.conn = conn;
    }
}
/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;
  public connection : mysql.IConnection;
  public connectionWrapper : IConnectionWrapper;
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
      this.connectionWrapper = new IConnectionWrapper();

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

//   db_config = {
//       host: "us-cdbr-iron-east-05.cleardb.net",
//       user: "b2bc51e289606e",
//       password: "be20cc51",
//       database: "heroku_3422c4713e5dc25"
//   }

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
    this.app.set("view engine", 'pug');

    //mount logger
    this.app.use(logger('dev'));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    //File upload settings
      this.app.use(fileUpload());

      this.app.use(cors());

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

    // this.app.use((req,res,next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.header("Access-Control-Allow-Methods", "DELETE,PATCH,POST");
    //     // res.header("Access-Control-Allow-Methods", "PATCH");
    //     // res.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    //     next();
    // });
    this.handleDisconnect();
  }

    handleDisconnect() {

        console.log('1. connecting to db:');
        if (this.connection){
            this.connection.destroy();
        }
        this.connection = mysql.createConnection(config.db_config); // Recreate the connection, since
                                                        // the old one cannot be reused.
        this.connectionWrapper.setConn(this.connection);

        this.connection.connect((err)=> {              	// The server is either down
            if (err) {                                     // or restarting (takes a while sometimes).
                console.log('2. error when connecting to db:', err);
                setTimeout(()=>this.handleDisconnect(), 1000);  // We introduce a delay before attempting to reconnect,
            } else {                                            // to avoid a hot loop, and to allow our node script to
                                                                // process asynchronous requests in the meantime.
                console.log('2-1.connection is established');
            }
        });
        // If you're also serving http, display a 503 error.
        this.connection.on('error', (err)=> {
            console.log('3. db error');
            if (err.code === 'PROTOCOL_CONNECTION_LOST' ||
                err.code === 'ECONNRESET') { 	// Connection to the MySQL server is usually
                this.handleDisconnect();                    // lost due to either server restart, or a
            } else {                                      	// connnection idle timeout (the wait_timeout
                throw err;                                  // server variable configures this)
            }
        });
    }

  private routes() {
    let router: express.Router;
    router = express.Router();

    //IndexRoute
    IndexRoute.create(router);
    this.app.use(router);

      // ChefRoute
      let chefRouter = express.Router();
      ChefRoute.initialize(chefRouter,this.connectionWrapper);
      this.app.use('/chef',chefRouter);

        let dishRouter = express.Router();
        DishRoute.initialize(dishRouter,this.connectionWrapper);
        this.app.use('/chef/:chefId/dish',dishRouter);
        this.app.use('/dish',dishRouter);

      // ClientRoute
      let clientRouter = express.Router();
      ClientRoute.initialize(clientRouter,this.connectionWrapper);
      this.app.use('/client',clientRouter);

      // AuthRoute
      let authRouter = express.Router();
      AuthRoute.initialize(authRouter,this.connectionWrapper);
      this.app.use('/auth',authRouter);

      // GenRequestRoute
      let genreqRouter = express.Router();
      GenRequestRoute.initialize(genreqRouter,this.connectionWrapper);
      this.app.use('/genreq', genreqRouter);

      // ConsumerRoute
      let utilsRouter = express.Router();
      UtilsRoute.initialize(utilsRouter,this.connectionWrapper);
      this.app.use('/utils', utilsRouter);

      this.app.post('/upload', this.uploadImage);
  }

    uploadImage (req, res, next) {
      console.log('upload image');
        // parse a file upload
        // var form = new formidable.IncomingForm();
        //
        // form.parse(req, (err, fields, files) => {
        //     // res.writeHead(200, {'content-type': 'text/plain'});
        //     // res.write('received upload:\n\n');
        //     // res.end(inspect({fields: fields, files: files}));
        //     res.json({fields: fields, files: files})
        //     console.log(inspect({err:err, fields: fields, files: files}));
        // });
        //
        if (!req.files)
            return res.status(400).send('No files were uploaded.');

        console.log(req.files);
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.image;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv(__dirname + config.upload_folder + sampleFile.name, (err) => {
            if (err)
                return res.status(500).send(err);

            res.json({result:'File uploaded!'});
        });

        // console.log('file info: ',req.files.image);
        //
        // //split the url into an array and then get the last chunk and render it out in the send req.
        // var pathArray = req.files.image.path.split( '/' );
        //
        // res.send(format(' Task Complete \n uploaded %s (%d Kb) to %s as %s'
        //     , req.files.image.name
        //     , req.files.image.size / 1024 | 0
        //     , req.files.image.path
        //     , req.body.title
        //     , req.files.image
        //     , '<img src="uploads/' + pathArray[(pathArray.length - 1)] + '">'
        // ));
    };
}
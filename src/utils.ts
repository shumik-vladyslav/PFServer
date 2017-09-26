import {AWSError} from "aws-sdk";
import {S3} from "aws-sdk/clients/browser_default";
import {config} from "./config";
var AWS = require('aws-sdk');

export class Utils {

    // resolve with image url
    public static Aws_s3_upload_file(name: string, buffer:Buffer) : Promise<any> {
        AWS.config.update(config.aws);
        var s3 = new AWS.S3();

        return new Promise ((resolve, reject) => {
            s3.putObject({
                Bucket: config.aws_bucket,
                Key: name,
                Body: buffer,
                ACL:'public-read'
            }, (err, data) => {
                if (err) reject(err)
                else resolve(config.image_url_prefix + name)
            });
        });
    }

    // resolve with url
    public static Upload_file_to_hosting(file): Promise<any>{
        return new Promise ((resolve, reject) => {
            const serverFileName = Date.now() + '.' + file.mimetype.split('/')[1];
            const targetPath = __dirname + config.upload_folder + serverFileName;
            file.mv(targetPath, (err) => {
                if (err) reject(err)
                else resolve(config.server_url_prod +'/uploads/'+serverFileName)
            });
        })
    }

    // resolve with inserted id
    public static InsertImage(conn, url): Promise<any> {
        return new Promise( (resolve, reject) => {
            conn.query('INSERT INTO IMAGES SET ?', {PATH: url}, (err, result) => {
                if (err) reject(err); else resolve(result.insertId);
            });
        })
    }

}
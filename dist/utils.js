"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class Utils {
    static Upload_file_to_hosting(file) {
        return new Promise((resolve, reject) => {
            const serverFileName = Date.now() + '.' + file.mimetype.split('/')[1];
            const targetPath = __dirname + config_1.config.upload_folder + serverFileName;
            file.mv(targetPath, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(config_1.config.server_url_prod + '/uploads/' + serverFileName);
            });
        });
    }
    static InsertImage(conn, url) {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO IMAGES SET ?', { PATH: url }, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result.insertId);
            });
        });
    }
}
exports.Utils = Utils;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    db_config: {
        host: "us-cdbr-iron-east-05.cleardb.net",
        user: "b3d9ee3a21740f",
        password: "c7a473e1",
        database: "heroku_54ce99cae833691"
    },
    jwtsecret: 'b3d9ee3a21740f',
    crypto_secret: "/sldf,/.s,dflkf_Y",
    crypto_algorithm: "aes-256-ctr",
    client_url_dev: "http://localhost:4200",
    client_url_prod: "https://p-f.herokuapp.com",
    server_url_prod: "https://p-f.herokuapp.com",
    sg_api_key: "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",
    from_email: "dar.dhan@gmail.com",
    upload_folder: '/public/uploads/',
    aws: {
        accessKeyId: 'AKIAJ3QHJC5XKQXR64XA',
        secretAccessKey: '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'
    },
    aws_bucket: 'heroku-imgs',
    image_url_prefix: 'https://s3.us-east-2.amazonaws.com/heroku-imgs/',
    dish_img_stub_url: 'https://s3.us-east-2.amazonaws.com/heroku-imgs/dish.png',
    human_img_stub_url: 'https://s3.us-east-2.amazonaws.com/heroku-imgs/human.jpg'
};

export const config = {
    db_config: {
        host: "localhost",
        user: "root",
        password: "123",
        database: "ProductiveFamiliesDevDB"
    },
    jwtsecret: 'b3d9ee3a21740f',
    crypto_secret: "/sldf,/.s,dflkf_Y",
    crypto_algorithm: "aes-256-ctr",

    client_url_prod: "http://www.productive-families.com",
    server_url_prod: "http://www.productive-families.com",

    // Send Grid Api Key
    sg_api_key: "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",
    // Email address from send chnge password mails
    from_email: "support@productive-families.com",

    // Folder to upload images
    upload_folder: '/public/uploads/',

    // If use AWS to upload files
    image_url_prefix: 'http://www.productive-families.com/uploads/',
    dish_img_stub_url: 'http://www.productive-families.com/uploads/dish.png',
    human_img_stub_url: 'http://www.productive-families.com/uploads/human.jpg'
}
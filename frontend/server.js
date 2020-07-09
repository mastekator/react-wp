const next = require('next');
const express = require('express');
const wooConfig = require('./wooConfig');

const WooCommerceAPI = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceAPI({
    url: wooConfig.siteUrl,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true,
    version: 'wc/v3'
});

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/getProducts', (req, response) => {
            WooCommerce.get("products")
                .then((res) => {
                    response.json(res.data);
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        });

        server.get('*', (req, response) => {
            return handle(req, response);
        });

        server.listen(port, err => {
            if (err) {
                throw err;
            }
            console.log(`Ready on ${port}`);
        })

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
;

const next = require('next');
const express = require('express');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/category/:slug', (req, res) => {
            return app.render(req, res, '/category', {slug: req.params.slug})
        })

        server.get('/product/:slug', (req, res) => {
            return app.render(req, res, '/product', {slug: req.params.slug})
        })

        server.get('/post/:slug', (req, res) => {
            return app.render(req, res, '/post', {slug: req.params.slug})
        })

        server.get('*', (req, res) => {
            return handle(req, res);
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


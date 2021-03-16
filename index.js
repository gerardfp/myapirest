const express = require('express')
const session = require('express-session');
const path = require('path')
const db = require('./basededatos')

const PORT = process.env.PORT || 5000

function restrict(req, res, next) {
    if (req.session.user_email) {
      next();
    } else {
      res.redirect('/login');
    }
}

express()
    .use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }))
    .get('/', (req, res) => res.render('pages/index'))

    .get('/mensajes', async (req, res) => {
        res.send(await db.mensajes.getMensajes());
    })

    .get('/add', async (req, res) => {
        db.mensajes.anadir(req.query.titulo, req.query.contenido);
        res.send(200);
    })

    .post('/login', async (req, res) => {
        // if(user = await db.auth.auth(req.body.user_email, req.body.user_password)){
            // req.session.regenerate(() => {
            //     req.session.user_email = user.user_email;
            //     req.session.user_id = user.user_id;
            // });
        if (req.body.user_email === 'admin' && req.body.user_password === 'admin' ) {
            req.session.regenerate(() => {
                req.session.user_email = 'admin@admin';
                req.session.user_id = 'admin1234';
            });
            res.sendStatus(200);
        } else {
            res.sendStatus(403);
        }

    })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
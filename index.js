const express = require('express')
const db = require('./basededatos')

const PORT = process.env.PORT || 5000

express()

    .get('/mensajes', async (req, res) => {
        res.send(await db.mensajes.getMensajes());
    })

    .get('/add', async (req, res) => {
        db.mensajes.anadir(req.query.titulo, req.query.contenido);
        res.send(201);
    })

    .get('/mensaje/:titulo', async (req, res) => {
        res.send(await db.mensajes.getMensaje(req.params.titulo))
    })

    .get('/delete/:titulo', async (req, res) => {
        let rowsDeleted = await db.mensajes.eliminar(req.params.titulo);
        console.log(rowsDeleted);
        if(rowsDeleted > 0) res.send(200);
        else res.send(404);

        /* https://restfulapi.net/http-status-codes/ */
    })

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
const promise = require('bluebird');
const pgPromise = require('pg-promise');
const MensajesRepo = require('./repo');

const initOptions = {
    promiseLib: promise,
    extend(obj, dc) {
        obj.mensajes = new MensajesRepo(obj, pgp)
    }
};

const pgp = pgPromise(initOptions);

const db = pgp({
    connectionString: process.env.DATABASE_URL || 'postgresql://admin:admin@localhost:5432/programacio',
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

module.exports = db;
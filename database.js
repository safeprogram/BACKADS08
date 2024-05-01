const {MongoClient} = require('mongodb');

let db = null;

const url = 'mongodb+srv://ingridmr857:Unesa2022@cluster0.jgx4jxy.mongodb.net/';

async function conectarDb() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url);
    await client.connect();
    db = client.db('agenda');
    return db;
}

module.exports = conectarDb;
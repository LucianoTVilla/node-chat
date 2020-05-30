const db = require('mongoose');
db.Promiste = global.Promise;


async function connect(url) {
    await db.connect(url, {
    useNewUrlParser: true,
    })
    console.log('[db] Conectada con exito!');
}

module.exports = connect;
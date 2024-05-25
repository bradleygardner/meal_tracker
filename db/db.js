const {MongoClient} = require('mongodb');

let _db;

const startdb = (callback) => {
    if(_db){
        return callback(null, _db)
    }
    MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });

}
const getDb = () => {
    if (!_db) {
      throw Error('Db not initialized');
    }
    return _db;
  };

module.exports = {
    startdb,
    getDb
}
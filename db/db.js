const { MongoClient } = require('mongodb');
const { mongoose } = require('mongoose');
let _db;

const startdb = (callback) => {
    if (_db) {
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
    connectDB();
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
        })
        _db = conn
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
};

module.exports = {
    startdb,
    getDb
}
const express = require('express');
const {MongoClient} = require('mongodb');
const assert = require('assert');
const router = express.Router();
const url = 'mongodb://localhost:27017';
const dbName = 'cheese';
const client = new MongoClient(url);


/* GET home page. */
router.get('/', (req, res) => {
    res.render('index');
});
/* POST upload */
router.post('/upload', (req, res, next) => {
    client.connect((err) => {
        if (err) next(err);
        const db = client.db(dbName);
        db.collection('snaps').insertOne(req.body, function (err, r) {
            assert.equal(null, err);
            assert.equal(1, r.insertedCount);
            res.send(r)
        })
    })
});

module.exports = router;

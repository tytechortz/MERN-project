const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');

router.get('/', (req, res) => {
    Trail.find({}, (err, trails) => {
        res.json(trails)
    })
    console.log('get all')
})


module.exports = router; 
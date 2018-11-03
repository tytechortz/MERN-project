const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');

router.get('/', (req, res) => {
    Trail.find({}, (err, trails) => {
        res.json(trails)
    })
    console.log('get request')
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: "handling post request"
    });
});

router.get('/:trailId', (req, res) => {
    const id = req.params.trailId;
    if (id === 'a'){
        res.status(200).json({
            message: 'special',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'an id'
        });
    }
});

module.exports = router; 
const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');

router.get('/', (req, res) => {
    Trail.find({}, (err, trails) => {
        res.json(trails)
    })
    console.log('get request')
});

router.post('/', async (req, res) => {

    try {
        console.log(req.body, ' this is req.body');
        const createdTrail = await Trail.create(req.body);
        console.log(' response happening')
        res.json({
            status: 201,
            data: createdTrail
        });
    } catch(err){
        console.log(err);
        res.send(err);
    }
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

router.put('/:trailId', (req, res) => {
    res.status(200).json({
        message: 'updated trail'
    });
});

router.delete('/:trailId', (req, res) => {
    res.status(200).json({
        message: 'deleted trail'
    });
});

module.exports = router; 
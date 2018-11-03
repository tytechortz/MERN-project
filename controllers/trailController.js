const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');

router.get('/', async (req, res) => {
    console.log(req.body, 'this is get all')
        try {
            const allTrails = await Trail.find();

            res.json({
                status: 200,
                data: allTrails
            });
        } catch (err){
            res.send(err)
        }
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

router.get('/:trailId', (req, res, next) => {

    try {
        const foundTrail = await Trail.findById(req.params.id);
        res.json({
            status: 200,
            data: foundTrail
        });
    } catch (err){
        res.send(err);
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
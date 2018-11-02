const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');
    router.get('/', async (req, res, next) => {
        console.log(req.body, 'this is get all')
        try {
            const allTrails = await Trail.find();
        
        res.json({
            status: 200,
            data: allTrail
        });
    } catch (err){
        res.send(err)
    }
});
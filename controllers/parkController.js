const express = require('express');
const router = express.Router();

const Park = require('../models/park');
    router.get('/', async (req, res, next) => {
        console.log(req.body, 'this is get all')
        try {
            const allParks = await Park.find();
        
        res.json({
            status: 200,
            data: allParks
        });
    } catch (err){
        res.send(err)
    }
});
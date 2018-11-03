const express = require('express');
const router = express.Router();

const Trail = require('../models/trail');



Trail.create({name: 'Red Rocks'}, (err, createdTrail) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdTrail);
    }
});



module.exports = router;
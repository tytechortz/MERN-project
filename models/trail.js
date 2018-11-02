const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    rating: Number

});

module.exports = mongoose.model('')
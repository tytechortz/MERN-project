const mongoose = require('mongoose');

const parkSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    rating: Number

});

module.exports = mongoose.model('')
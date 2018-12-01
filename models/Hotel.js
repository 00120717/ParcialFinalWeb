var mongoose = require('mongoose');

var hotel = new mongoose.Schema({
    nombre:String,
    ubicacion:String,
    precio:Number
});

module.exports = mongoose.model('Hotel',hotel);
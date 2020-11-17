const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
    name: String,
    price: Number,
    pathimg: String
})

module.exports = mongoose.model('product', Product)
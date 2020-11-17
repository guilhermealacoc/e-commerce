const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
    name: String,
    price: Number,
    pathimg: String,
    infos: String,
    amount: Number
});

module.exports = mongoose.model('Product', Product)
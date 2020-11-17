const mongoose = require('mongoose');

const { Schema } = mongoose;

const Order = new Schema({
    Products: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
    Qtd: [Number],
    PriceProducts: [Number],
    Total: Number
});

module.exports = mongoose.model('Order', Order);


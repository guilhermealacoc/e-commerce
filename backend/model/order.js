const mongoose = require('mongoose');

const { Schema } = mongoose;

const Order = new Schema({
   
    Products: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Product', 
        require:true,
    }],
        
    Qtd: {
        type: [Number],
        require: true,
    },

    Total: {
        type: Number,
        require: true,
    },

    Owner: {
        type: String,
        require: true
    },

    CashPayment: {
        type: Boolean,
        require: true
    },
    
    Boleto: String,

    NumberCreditCard: String,
    
    Cvv: String,
    
    QtdParcelas: Number,

    PrecoParcela: Number,

    createdAt: {
        type: Date,
        default: Date.now,       
    },


        
});

module.exports = mongoose.model('Order', Order);


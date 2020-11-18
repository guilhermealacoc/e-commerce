const express = require('express');
const routes  = express.Router();
const mongoose = require('mongoose');
const CreateProduct = require('./controller/product');
const Order = require('./controller/order');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);


routes.get('/', (req,res)=>{
    
    console.log("pai ta on");
    res.send({
      'deus': "é fiel" 
    })
})

routes.post('/', CreateProduct.createProduct);
routes.post('/1', Order.CreateOrder);
routes.get('/list', Order.ListOrder);


module.exports = routes;

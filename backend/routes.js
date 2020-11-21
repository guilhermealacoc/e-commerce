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

routes.post('/createproduct', CreateProduct.createProduct);
routes.post('/listproduct', CreateProduct.createProduct);
routes.post('/createorder', Order.CreateOrder);
routes.get('/listorder', Order.ListOrder);

module.exports = routes;

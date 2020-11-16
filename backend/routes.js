const express = require('express');
const routes  = express.Router();
const mongoose = require('mongoose');
const CreateProduct = require('./controller/product');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);


routes.get('/', (req,res)=>{
    console.log("pai ta on");

    res.send({
       'deus': "é fiel" 
    })
})

routes.post('/', CreateProduct.createProduct);
routes.get('/test', CreateProduct.Messagetest);

module.exports = routes;

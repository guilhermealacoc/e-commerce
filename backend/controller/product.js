const Product = require('../model/product');

const CreateProduct = {
    
    createProduct(req,res){
        const { name, price, pathimg } = req.body;
        const product = new Product({name, price, pathimg});
        product.save((err, product)=>{
            if(err){
               return res.status(500).send({message: 'erro'})
            }
            res.send(product);
        });
    },
    Messagetest(req,res){
        const test = req.body;
        res.send(test);
    }
}


module.exports = CreateProduct;
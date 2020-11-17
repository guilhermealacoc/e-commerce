const Product = require('../model/product');

const CreateProduct = {
    
    createProduct(req,res){
        const { _id, name, price, pathimg, infos, amount } = req.body;
        const product = new Product({ _id, name, price, pathimg, infos, amount});
        product.save((err, product)=>{
            if(err){
               return res.status(500).send({message: 'erro'})
            }
            res.send(product);
        });
    }

    
}


module.exports = CreateProduct;
const Product = require('../model/product');

const CreateProduct = {
    
    createProduct(req,res){
        const { _id, Name, Price, Pathimg, Infos, Amount } = req.body;
        const product = new Product({ _id, Name, Price, Pathimg, Infos, Amount});
        
        product.save((err, product) => {
            if(err){
               return res.status(500).send({message: 'erro'})
            }
            res.send(product);
        });
    }

}


module.exports = CreateProduct;
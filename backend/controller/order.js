const { find } = require('../model/order');
const Order = require('../model/order');
const Product = require('../model/product');

const CreateOrder = {
    CreateOrder(req,res){
        const { Products, Qtd, PriceProducts, Total } = req.body;
        const order = new Order({Products, Qtd, PriceProducts, Total});
        order.save((err, order)=>{
            if(err){
                return res.status(500).send({ message: 'erro'})
            }
            res.send(order);
        });
    },

   async ListOrder(req, res){
     const orders = await Order.find().populate('Products');

     return res.send(orders);
    }   
}

module.exports = CreateOrder;
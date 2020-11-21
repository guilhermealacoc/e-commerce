const Order = require('../model/order');
const Product = require('../model/product');

const CreateOrder = {
    
  async CreateOrder(req, res) {
        const { Products, Qtd, Owner, CashPayment, Boleto, NumberCreditCard, Cvv, QtdParcelas } = req.body;

        const total = async () => {
            // map -> retorna um array, pegando um array percorrendo ele e criando um outro array em cima dele;
            // [] de promises;
            
            //passando o preço dos produtos no array de acordo com o ID da requisição.
            const pricePromises = Products.map(async product => {
                const { Price } = await Product.findById(product, 'Price');
                return Price;
            });
            
            const prices = await Promise.all(pricePromises); //tratando as promisses das funções async
            const pricesResult = []; //vetor para armazenar os preços finais que serão multiplicados pelas quantidades declaradas na requisição 

            //multiplicação das quantidades
            for(let i=0; i<Qtd.length; i++){
                const result = Qtd[i]*prices[i];
                pricesResult.push(result);
            }

            //reduzindo os resultados em uma soma geral para formar o total do pedido
            const reducer = (accumulator, currentvalue)=>accumulator+currentvalue;
            return pricesResult.reduce(reducer);
        }

        const totalparcelas = CashPayment === true ? 1 : QtdParcelas;

        const order = new Order({
            Products, 
            Qtd,
            Total: await total(),
            Owner,
            CashPayment,
            Boleto,
            NumberCreditCard,
            Cvv,
            QtdParcelas : totalparcelas,
            PrecoParcela: await total() / totalparcelas
        });
   
        order.save((err, order)=>{
             if(err){
                 return res.status(500).send({ message: 'erro'})
             }
             res.send(order);
        });
    },

    async ListOrder(req, res){
     const orders = await Order.find().populate('Products','Name + Price');

     return res.send(orders);
    },   
}

module.exports = CreateOrder;
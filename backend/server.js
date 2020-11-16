require('dotenv').config();
const routes = require('./routes');

const express = require('express');
const config = require('./config/index');
const app = express();
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_DB, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(err);
});

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);
app.listen(config.app.port, (err) => {
    if(err){
        return console.log('erro');
    }
    console.log('iniciou em http://localhost:3333');
})
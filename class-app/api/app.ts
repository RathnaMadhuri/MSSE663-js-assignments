import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {PizzaService} from './src/pizzas.service';
import mongoose from 'mongoose';

const app= express();
const PORT = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pizzasdb');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Connection Succesful!');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cookieParser());
const pizzaService = new PizzaService();

//app.get('/api/pizzas',(req,res) =>{
  //  const pizzas = pizzaService.getCreatedPizzas();
    //res.send({
    //    msg: 'Found Pizzas',
      //  pizzas,
    //});
      //  });
//app.get('/api/pizzas/presets',(req,res) =>{
  //  const pizzas = pizzaService.getPizzaPresets();
    //res.send({
      //  msg: 'Found Pizza Presets',
        //pizzas,
        //});
            
//});

app.post('/api/pizzas', pizzaService.createPizza);
app.get('/api/pizzas/presets', pizzaService.getPizzaPresets);
app.get('/api/pizzas/presets/:id', pizzaService.getPizzaPreset);

app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});
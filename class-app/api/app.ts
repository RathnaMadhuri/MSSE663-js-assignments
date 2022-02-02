import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {PizzaService} from './src/pizzas.service';

const app= express();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(cookieParser());
const pizzaService = new PizzaService();

app.get('/api/pizzas',(req,res) =>{
    const pizzas = pizzaService.getCreatedPizzas();
    res.send({
        msg: 'Found Pizzas',
        pizzas,
    });
        });
app.get('/api/pizzas/presets',(req,res) =>{
    const pizzas = pizzaService.getPizzaPresets();
    res.send({
        msg: 'Found Pizza Presets',
        pizzas,
        });
            
});
app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`);
});
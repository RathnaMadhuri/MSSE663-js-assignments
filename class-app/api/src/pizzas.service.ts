import { Handler } from "express-serve-static-core";
import {PizzaEntity} from "../lib/api-interfaces";
import {PIZZAS} from '../lib/pizza';
import { Pizzas } from "./pizzas.model";

export class PizzaService{
    //private readonly pizzaPresets: PizzaEntity[] = PIZZAS;
    //private readonly pizzas: PizzaEntity[] =[];

   // getPizzaPresets():PizzaEntity[]{
     //   return this.pizzaPresets;

    //}
    //getCreatedPizzas():PizzaEntity[]{
      //  return this.pizzas

    //}
    //getCreatedPizza(id : string): PizzaEntity {
      //  const pizza = this.pizzas.find(pizza => pizza.id == id)
        //if(!pizza){
          //  throw new Error('Pizza not found');
        //}
        //return pizza;

        getPizzaPresets: Handler = (req, res) =>{
             Pizzas.find({}, (err: any, data: PizzaEntity[])=> {
                  if(err) {
                     return res.send(err);
                  }
                  res.send({
                      msg: 'Found pizza presets',
                      pizzas: data,
                  });
              });
          };
      
      
          getPizzaPreset: Handler = (req, res) =>{
              Pizzas.findById(req.params.id, (err: any, data: PizzaEntity)=> {
                  if(err) {
                     return res.send(err);
                  }
                  res.send({
                      msg: 'Found pizza preset',
                      pizza: data,
                  });
              });
          };


    createPizza: Handler = (req,res) => {
        const {pizzas} = req.body;
        const newPizzas = new Pizzas(pizzas);
        newPizzas.save((err: any, data: any)=> {
            if(err) {
                return res.send(err);

            }
            res.send({
               msg: 'Created pizzas',
               pizzas: [data], 
            });
        });
    };
}

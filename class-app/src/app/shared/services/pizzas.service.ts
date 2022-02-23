

import { Pizza,PizzaEntity, PizzaSize, } from 'api/lib/api-interfaces';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface PizzaForm{
    size: PizzaSize;
    toppings: string[];

}

export interface PizzaResponse{
    msg?: string;
    pizzas: PizzaEntity[];

}

@Injectable({
    providedIn: 'root',
})

export class PizzasService{
    constructor(private http: HttpClient){ }

    getPizzaPresets():Observable<PizzaResponse> {
        return this.http.get<PizzaResponse>('/api/pizzas/presets');
    }

    
    
    
    
    
    
    
    //getPizzaPresets: Handler = (req, res) =>{
      //  Pizzas.find({}, (err: any, data: PizzaEntity[])=> {
        //    if(err) {
          //     return res.send(err);
            //}
           // res.send({
             //   msg: 'Found pizza presets',
               // pizzas: data,
            //});
        //});
    //};


    //getPizzaPreset: Handler = (req, res) =>{
      //  Pizzas.findById(req.params.id, (err: any, data: PizzaEntity)=> {
        //    if(err) {
          //     return res.send(err);
            //}
            //res.send({
              //  msg: 'Found pizza preset',
                //pizza: data,
            //})
        //}
    //}

    
    savePizzas(pizzas: PizzaForm[]):Observable<PizzaResponse> {
        return this.http.post<PizzaResponse>('/api/pizzas',{pizzas});
    }
}
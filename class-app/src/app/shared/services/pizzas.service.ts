import { Injectable } from "@angular/core";
import {PizzaEntity} from 'api/lib/api-interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';


export interface PizzaResponse{
    msg: string;
    pizzas: PizzaEntity[];

}

@Injectable({
    providedIn: 'root',
})

export class PizzasService{
    constructor(private http: HttpClient){ }
    getPizzaPresets(): Observable<PizzaResponse>{
        return this.http
        .get<PizzaResponse>('/api/pizzas/presets');
        
    }
}
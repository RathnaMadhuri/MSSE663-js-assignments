import { Injectable } from '@angular/core';
import {Pizza, PizzaEntity} from 'api/lib/api-interfaces';
import {Observable, map, BehaviorSubject, tap, shareReplay} from 'rxjs';
import { PizzaResponse, PizzasService} from './pizzas.service';

@Injectable({
    providedIn: 'root'
})
export class PizzasStateService{
    private readonly pizzas = new BehaviorSubject<PizzaEntity[]>([])
    
    readonly pizzas$ = this.pizzas.asObservable();

    get pizzaValues(): PizzaEntity[]{
        return this.pizzas.getValue();
    }
    
    
    constructor(private pizzasService: PizzasService){
        this.loadPizzasPreset().subscribe();
     }

    loadPizzasPreset() : Observable<PizzaEntity[]> {
        return this.pizzasService
        .getPizzaPresets()
        .pipe(
            map((data: PizzaResponse) => data.pizzas),
            tap(pizzas => {
                this.pizzas.next(pizzas);
            }),
            shareReplay(1)
        );    
    }

    createPizzas(pizzas: Pizza[]){
        const newPizzas = pizzas.map((pizza) => ({
            ...pizza,
            id: '1234',
        }));
        this.pizzas.next([...this.pizzaValues, ...newPizzas]);
    }
 
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PizzaEntity } from 'api/lib/api-interfaces';
import { filter, Observable, take, tap} from 'rxjs';
import { PizzasStateService } from './services/pizzas-state.service';


@Injectable({
    providedIn: 'root'
})
export class PizzasResolver implements Resolve<PizzaEntity[]>{
    resolve(route: ActivatedRouteSnapshot): Observable<PizzaEntity[]> {
            return this.pizzasStateService.pizzas$.pipe(
                filter(pizzas => !! pizzas.length),
                tap(console.log),
                take(1)
            );
        }

        constructor(private pizzasStateService: PizzasStateService){}
    }        
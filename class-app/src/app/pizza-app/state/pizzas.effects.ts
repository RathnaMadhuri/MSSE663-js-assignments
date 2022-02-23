import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { PizzasService } from "src/app/shared/services/pizzas.service";
import {
    loadPizzaPresets,
    loadPizzasPresetsFailure,
    loadPizzaPresetsSuccess,
} from './pizzas.actions';

@Injectable({providedIn: 'root'})
export class PizzasEffects{
    loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadPizzaPresets),
        switchMap(() => 
            this.pizzasService.getPizzaPresets().pipe(
                map(({pizzas}) => loadPizzaPresetsSuccess({pizzas})),
                catchError((error) => of(loadPizzasPresetsFailure({error})))
                )
                )
            )
        );
    
    constructor(
        private actions$: Actions,
        private pizzasService: PizzasService
    ) {}
}

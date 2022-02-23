import {createAction, props} from '@ngrx/store';
import {PizzaEntity} from 'api/lib/api-interfaces';

export const loadPizzaPresets = createAction('[Pizzas] Load Pizzas');

export const loadPizzaPresetsSuccess = createAction('[Pizzas] Load Pizzas Success',
    props<{pizzas: PizzaEntity[]}>()
);
export const loadPizzasPresetsFailure = createAction('[Pizzas] Load Pizzas Failure',
    props<{error: any}>()
);



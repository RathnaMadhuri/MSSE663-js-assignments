//const viewModel = {
  //  pizzas:[],
    //count: 0,
    //filterPizzas: [],
    //selectedPizza: null,
    //loading: false,

//};
import {createSelector, MemoizedSelector} from '@ngrx/store';
import { PizzasState, selectLoading } from '.';
import { selectPizzas } from './pizzas.reducer';
import {PizzaEntity} from 'api/lib/api-interfaces';

export interface PizzasViewModel {
    pizzas:PizzaEntity[];
    count: number;
    loading: boolean;
}

 export const selectPizzasViewModel: MemoizedSelector<
    PizzasState,
    PizzasViewModel
 > = createSelector(
     selectPizzas,
     selectLoading,
     (pizzas,loading) =>({pizzas, loading, count:pizzas.length,})
 );
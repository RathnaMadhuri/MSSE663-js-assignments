import { Injectable } from "@angular/core";
import {Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Store } from '@ngrx/store';
import { PizzaEntity } from "api/lib/api-interfaces";
import {filter, Observable, take, tap} from 'rxjs';
import { PizzasState, selectPizzasViewModel, PizzasViewModel} from "./pizza-app/state";

@Injectable({providedIn: 'root'})

export class PizzasResolver implements Resolve<PizzasViewModel> {
    resolve(route: ActivatedRouteSnapshot): Observable<PizzasViewModel> {
        return this.store.select(selectPizzasViewModel).pipe(
            tap(vm => {
                if(!vm || vm == null) {
                    
                }
            })
        )
    }

}
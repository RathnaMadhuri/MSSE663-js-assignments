import { Component } from '@angular/core';
import { pluck } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  {
  
  readonly pizzas$ = this.activatedRoute.data.pipe(pluck('pizzas'));
  
  constructor(private activatedRoute: ActivatedRoute ){}

  }
  
    
  
  


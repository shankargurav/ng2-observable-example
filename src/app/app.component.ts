import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import {Http} from '@angular/http'

import { Observable  } from 'rxjs/Observable';
import  'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchForm: any;
  results$: Observable<any>;

  constructor(private _formBuilder: FormBuilder, private _http: Http){
    const API_URL = 'https://www.googleapis.com/youtube/v3/search'
    const API_KEY = 'AIzaSyAPDoq61KUGbMLYasPrMjnwrotJr9U6g1g';
    this.searchForm = this._formBuilder.group({
      'search': ['',Validators.required]
    })
    this.results$ = this.searchForm.controls.search.valueChanges
                    .debounceTime(500)
                    .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))
                    .map( res => res.json())
                    .map( res => res.items);

  }
  
  // title = 'app works!'; 
  // incrementBtn = document.getElementById('increment');
  // decrementBtn = document.getElementById('decrement');
  // counter = document.getElementById('counter');

  // incrementClick$ = Observable.fromEvent(this.incrementBtn, 'click');
  // decrementClick$ = Observable.fromEvent(this.decrementBtn, 'click');

  // clicks$ = Observable
  //           .merge(this.incrementClick$,this.decrementClick$)
  //           .map((event:any) => parseInt(event.target.value,10));
  // total$ = this.clicks$
  //           .scan((total,value) => total+value,0);

  // this.total$.subscribe(total => {
  //   this.counter.innerText = total.toString();
  // }) 
}

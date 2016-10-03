import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Observable  } from 'rxjs/Observable';
import  'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

console.clear();


// let stream1$ = new Observable(observer =>{
//   let count = 0;
//   let interval = setInterval(() => {
//     observer.next(count++); 
//   }, 1000) 
   
//    return ()=>{
//      clearInterval(interval);
//    }
// });


// let dispoable = stream1$.subscribe( value => console.log(value));

// setTimeout(()=>{
//   dispoable.unsubscribe();
// }, 1000)

// stream1$.filter((value:number) => value %2 === 0)
//         .subscribe(value => console.log(value));

// stream1$.map((value:number) => value * value)
//       .subscribe( value => console.log(value));
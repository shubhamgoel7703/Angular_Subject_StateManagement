import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {

 subject = new Subject(); 
 observervable= new Observable(observer => {

  observer.next("helo");
  setTimeout(() => { 
    observer.next("Helloooo");
  },2000);
  
});

ngOnInit(){
  console.log("service init");
  this.subject.next('a');  
  this.subject.subscribe(value => {
      console.log("Subscription got", value); // Subscription wont get 
                                              // anything at this point
    });

    

}



  constructor() { console.log("service const");
  this.observervable.subscribe(value => {
    console.log("Subscription got", value); // Subscription wont get 
                                            // anything at this point
  });
  }
}

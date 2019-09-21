import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  subjectValue;
  inputValue;
  constructor( private service : ServiceService) { }

  ngOnInit() {

    this.service.subject.subscribe(value => {
      console.log("Subscription got", value); // Subscription wont get 

      this.subjectValue=value;
    }); 
  }

  valueChange()
  {
    this.service.subject.next(this.inputValue);
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  subjectValue;
  inputValue;

  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.service.subject.subscribe(value => {
        console.log("Subscription got", value); // Subscription wont get 
                                                // anything at this point

        this.subjectValue=value;
      }); 
  }

  valueChange()
  {
    this.service.subject.next(this.inputValue);
  }

}

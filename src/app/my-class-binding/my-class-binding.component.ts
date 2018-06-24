import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-class-binding',
  templateUrl: './my-class-binding.component.html',
  styleUrls: ['./my-class-binding.component.css']
})
export class MyClassBindingComponent implements OnInit {
  name = 'Hier ein Class Binding Example (grün) ngClass';
  isGreenActive = true;
  isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}

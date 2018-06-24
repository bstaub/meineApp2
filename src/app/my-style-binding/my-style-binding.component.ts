import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-style-binding',
  templateUrl: './my-style-binding.component.html',
  styleUrls: ['./my-style-binding.component.css']
})
export class MyStyleBindingComponent implements OnInit {
  name = 'Hier ein Style Binding Example (grün) ngStyle';
  meineFarbe = 'orange';
  constructor() { }

  ngOnInit() {
  }

}

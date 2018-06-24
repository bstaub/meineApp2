import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-click-counter',
  templateUrl: './my-click-counter.component.html',
  styleUrls: ['./my-click-counter.component.css']
})
export class MyClickCounterComponent implements OnInit {
  counterzahl = 1;
  constructor() { }

  ngOnInit() {
  }

  myCounter(e) {
    this.counterzahl = this.counterzahl + 1;
    console.log(e);
  }

}

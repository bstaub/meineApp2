import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form-keyup-event',
  templateUrl: './my-form-keyup-event.component.html',
  styleUrls: ['./my-form-keyup-event.component.css']
})
export class MyFormKeyupEventComponent implements OnInit {
  length = 0;
  constructor() { }

  ngOnInit() {
  }

  lengthCounter(e) {
    this.length = this.length + 1;
    console.log(e);
  }

}

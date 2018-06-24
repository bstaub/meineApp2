import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-switch',
  templateUrl: './my-switch.component.html',
  styleUrls: ['./my-switch.component.css']
})
export class MySwitchComponent implements OnInit {
  length = 0;
  videos = ['Angular', 'TypeScript', 'JavaScript', 'Node', 'Ract', 'Vue'];
  constructor() { }

  ngOnInit() {
  }

  myClickHandler() {
    this.length = this.length + 1;
  }

}

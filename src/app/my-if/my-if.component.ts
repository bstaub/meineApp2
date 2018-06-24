import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-if',
  templateUrl: './my-if.component.html',
  styleUrls: ['./my-if.component.css']
})
export class MyIfComponent implements OnInit {
  videos = ['Angular', 'TypeScript', 'JavaScript', 'Node', 'Ract', 'Vue'];
  constructor() { }

  ngOnInit() {
  }

}

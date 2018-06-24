import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  videos = ['Angular', 'TypeScript', 'JavaScript', 'Node', 'Ract', 'Vue'];
  constructor() { }

  ngOnInit() {
  }

}

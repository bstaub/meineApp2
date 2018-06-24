import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {
  name = 'Video App going through the pipe';
  constructor() { }

  ngOnInit() {
  }

}

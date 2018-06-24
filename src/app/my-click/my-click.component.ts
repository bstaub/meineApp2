import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-click',
  template: '<button (click)="helloWorld()">Mein Button</button>',
  styleUrls: ['./my-click.component.css']
})
export class MyClickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  helloWorld(){
    console.log('HelloWorld clicked');
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-own-properties',
  templateUrl: './my-own-properties.component.html',
  styleUrls: ['./my-own-properties.component.css']
})
export class MyOwnPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() eigenschaft;

  myClickHandler(){
    window.alert(this.eigenschaft);
  }

}

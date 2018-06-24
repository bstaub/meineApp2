import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-my-input-properties',
  templateUrl: './my-input-properties.component.html',
  styleUrls: ['./my-input-properties.component.css']
})
export class MyInputPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('mitpunkt.eigenschaft2') eig: string;

  myClickHandler(){
    window.alert(this.eig);
  }

}

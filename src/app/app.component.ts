import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  myClickHandlerTriggersEmmiter(){
    window.alert('kommt aus app.component.js und wurde durch Emit ausgelöst!');
  }

}

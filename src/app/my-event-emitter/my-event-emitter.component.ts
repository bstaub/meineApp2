import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-event-emitter',
  templateUrl: './my-event-emitter.component.html',
  styleUrls: ['./my-event-emitter.component.css']
})
export class MyEventEmitterComponent implements OnInit {
  length = 100;
  @Output() meinEmitter = new EventEmitter();

  constructor() { }


  ngOnInit() {
    // while(length < 20){
    //  length++;
    // }
    // this.meinEmitter.emit();   // emit() kann irgendwo ausgelöst werden!!
  }

  myClickHandlerTriggersEmmiter(){
    this.length;
    this.meinEmitter.emit();  // event wird in der Komponente darüber ausgelöst, der benutzenden Komponente!
  }
}

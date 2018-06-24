import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-id-link-clone',
  templateUrl: './my-id-link-clone.component.html',
  styleUrls: ['./my-id-link-clone.component.css']
})
export class MyIdLinkCloneComponent implements OnInit {
  url = 'http://www.intersolution.ch';
  constructor() { }

  ngOnInit() {
  }

}

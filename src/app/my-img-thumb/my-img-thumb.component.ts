import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-img-thumb',
  templateUrl: './my-img-thumb.component.html',
  styleUrls: ['./my-img-thumb.component.css']
})
export class MyImgThumbComponent implements OnInit {
  thumbnail = 'https://dummyimage.com/100x100/000/fff';
  setThumbnail = true;
  names = ['Produkt1', 'Produkt2', 'Produkt3', 'Produkt4', 'Produkt5', 'Produkt6'];
  constructor() { }

  ngOnInit() {
  }



}

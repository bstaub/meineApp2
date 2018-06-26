import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  PreisInEuro: number;
  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BRC,USD,EUR')
      .subscribe(data => {
        this.PreisInEuro = data['EUR'];
        console.log(data);
        console.log(data['EUR']);
      });
  }

}

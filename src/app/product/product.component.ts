import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  constructor(datenbank: ProductsService) {
    // datenbank = new VideoDBService();  // wird automatisch über Decorator injected! im Module providers eintragen und dort importieren!
    this.products = datenbank.getProducts();
    console.log(this.products);
  }

  ngOnInit() {
  }

}

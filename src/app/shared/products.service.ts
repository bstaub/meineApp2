import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: object[];
  constructor() {
    this.products = [
      {name: 'mofa', farbe: 'rot', preis: '1000', waehrung: 'CHF' },
      {name: 'bike', farbe: 'blau', preis: '300', waehrung: 'CHF' },
      {name: 'macbook', farbe: 'grau', preis: '1600', waehrung: 'CHF' },
      {name: 'android', farbe: 'weiss', preis: '500', waehrung: 'CHF' }
    ];
  }
  getProducts(){
    return this.products;
  }
}

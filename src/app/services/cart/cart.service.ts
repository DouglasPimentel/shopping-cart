import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../../data/products';
import { Shipping } from '../../types/Shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }
}

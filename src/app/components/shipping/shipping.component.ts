import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import { Shipping } from '../../types/Shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts!: Observable<Shipping[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}

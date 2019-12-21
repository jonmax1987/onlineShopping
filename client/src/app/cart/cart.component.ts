import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart
  constructor(private data: ProductService) { }

  ngOnInit() {
    this.data.currentCart();
    this.data.cart_as.subscribe((obj) => this.cart = obj);
}

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  product = [];
  cart
  count = 0
  constructor(private data: ProductService, private router: Router) { }

  ngOnInit() {
    this.data.product_as.subscribe((obj) => this.product = obj);
    this.data.cart_as.subscribe((obj) => this.cart = obj);
    let tath = this;
    setTimeout(function () {
      tath.get_count();
    }, 1000);
  }

  get_count() {
    let tath = this

    tath.product.map((obj) => {
      obj.count = 0
      console.log(obj);
    })
  }

  addProductInCart(obj) {
    let object = {
      id_product: obj.id,
      count: this.count,
      price: obj.price,
      id_cart: this.cart.id
    }
    this.data.add_Product_cart(object);
    this.cart = 0
  }

  plus(obj) {
    obj.count = obj.count + 1;
    console.log(obj.count);
  }
  minus(obj) {
    if (this.count >= 0) {
      obj.count = obj.count - 1;
      console.log(obj.count);
    }
  }
}

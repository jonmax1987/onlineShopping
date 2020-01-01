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
  count
  alert = true;
  constructor(private data: ProductService, private router: Router) { }

  ngOnInit() {
    this.data.product_as.subscribe((obj) => this.product = obj);
    this.data.cart_as.subscribe((obj) => this.cart = obj);
  }


  addProductInCart(obj) {
    if (obj.count < 1) {
      this.alert = false
      var that = this;
      setTimeout(function(){
        that.alert = true;
      },3000);
      return;
    }
    let object = {
      id_product: obj.id,
      count: obj.count,
      price: obj.price,
      id_cart: this.cart[0].id
    }
    this.data.add_Product_cart(object);
    obj.count = 0
  }

  plus(obj) {
    obj.count = obj.count + 1;
  }
  minus(obj) {
    if (this.count >= 0) {
      obj.count = obj.count - 1;
    }
  }
}

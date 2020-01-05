import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = [];
  cart
  count
  alert = true;
  token
  product_Col='col-md-10';
  sidebar='col-md-2'
  constructor(private data: ProductService, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.data.product_as.subscribe((obj) => this.product = obj);
    this.data.cart_as.subscribe((obj) => this.cart = obj);
    this.data.token_as.subscribe((obj) => this.token = obj);
  }


  addProductInCart(obj) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
    if (obj.count < 1) {
      this.alert = false
      var that = this;
      setTimeout(function () {
        that.alert = true;
      }, 3000);
      return;
    }
    let object = {
      id_product: obj.id,
      count: obj.count,
      price: obj.price,
      id_cart: this.cart[0].id
    }
    this.data.add_Product_cart(object);
    obj.count = 0;
    obj.add = true;
  }

  plus(obj) {
    obj.count = obj.count + 1;
    if (obj.count != 0) {
      obj.add = false;
    }
  }
  minus(obj) {
    if (obj.count != 0) {
      obj.count = obj.count - 1;
    }
    if (obj.count == 0) {
      obj.add = true;
    }
  }

}

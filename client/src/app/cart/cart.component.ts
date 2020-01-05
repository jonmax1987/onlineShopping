import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart
  products_cart
  id_user
  total 
  constructor(private data: ProductService, private usersData: UsersService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.usersData.id_user_as.subscribe((obj) => this.id_user = obj)
    this.data.cart_as.subscribe((obj) => this.cart = obj);
    this.data.currentCart(this.id_user);
    this.data.product_cart_as.subscribe((obj) => this.products_cart = obj);
    this.data.total_as.subscribe((obj) => this.total = obj)
    var that = this;
    setTimeout(function () {
      that.data.get_product_cart();
      console.log(that.cart);
    }, 1000);
  }
 
  deleteItem(item){
    this.data.deleteItemCart(item.id);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  products_cart;
  id_user;
  total;
  order;
  back;
  term;
  constructor(private data: ProductService, private usersData: UsersService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    this.usersData.id_user_as.subscribe((obj) => this.id_user = obj);
    this.data.cart_as.subscribe((obj) => this.cart = obj);
    this.data.currentCart(this.id_user);
    this.data.product_cart_as.subscribe((obj) => this.products_cart = obj);
    this.data.total_as.subscribe((obj) => this.total = obj);
    this.data.order_as.subscribe((obj) => this.order = (obj));
    this.data.back_as.subscribe((obj) => this.back = (obj));
    // this.data.cheeck_bill_as;
    this.data.search_as.subscribe((term)=>this.term=term);

    var that = this;
    setTimeout(function () {
      that.data.get_product_cart();
      console.log(that.cart);
    }, 1000);
  }

  deleteItem(item) {
    this.data.deleteItemCart(item.id);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  deleteAll() {
    this.data.deleteAllItemCart();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  };


  sendToOrder_() {
    this.data.changeOrder(true);
    this.data.changeback(false);
    this.router.navigate(['/order'])
  };


  backToShop() {
    this.data.changeOrder(false);
    this.data.changeback(true)
    this.router.navigate(['/main'])
  };
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  order_count = 0;
  product_count = 0;

  message_cart;

  last_order;
  message_title;
  create_data_cart;
  total;

  resume_shopping_alert;
  start_shopping_alert;

  constructor(private router: Router, private data: ProductService) { }

  ngOnInit() {
    this.getOrderCount();
    this.getProductCount();
    this.data.resume_shopping_as.subscribe((bool) => this.resume_shopping_alert = bool);
    this.data.start_shopping_as.subscribe((bool) => this.start_shopping_alert = bool);
    this.data.message_title_as.subscribe((str) => this.message_title = str);
    this.data.create_date_as.subscribe((str) => this.create_data_cart = str);
    this.data.total_as.subscribe((str) => this.total = str);
    this.data.last_order_as.subscribe((str) => this.last_order = str);
  }

  getOrderCount() {
    fetch('http://localhost:3000/product/order')
      .then((res) => res.json())
      .then((res) => {
        let count = 'COUNT(*)'
        this.order_count = res.data[0][count];
        console.log(this.order_count);
      }), (error) => {
        console.log("error:", error);
      }
  };

  getProductCount() {
    fetch('http://localhost:3000/product/productcount')
      .then((res) => res.json())
      .then((res) => {
        let count = 'COUNT(*)'
        this.product_count = res.data[0][count];
        console.log(this.order_count);
      }), (error) => {
        console.log("error:", error);
      }
  };


  startshopp() {
    this.router.navigate(['/main']);
  };

}




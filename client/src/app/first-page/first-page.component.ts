import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  order_count = 0;
  product_count = 0;

  message_cart;
  message_title;

  resume_shopping;
  start_shopping;

  constructor(private data: ProductService) { }

  ngOnInit() {
    this.getOrderCount();
    this.getProductCount();
    this.data.resume_shopping_as.subscribe((bool) => this.resume_shopping = bool);
    this.data.start_shopping_as.subscribe((bool) => this.start_shopping = bool);
    this.data.message_title_as.subscribe((str) => this.message_title = str);

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




}




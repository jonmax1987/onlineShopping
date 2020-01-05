import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category = []
  product = [];
  jwt
  constructor(private data: ProductService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.data.token_as.subscribe((obj) => this.jwt = obj);
    this.data.currentCategory(this.jwt);
    this.data.category_as.subscribe((obj) => this.category = obj);
    this.data.product_as.subscribe((obj) => this.product = obj);
    this.data.currentProduct('1');
  }

  getProduct(id_category) {
    this.data.currentProduct(id_category)
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

}

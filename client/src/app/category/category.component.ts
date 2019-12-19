import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category = []
  product = [];

  constructor(private data: ProductService) { }

  ngOnInit() {
    this.data.currentCategory();
    this.data.category_as.subscribe((obj) => this.category = obj)
    this.data.product_as.subscribe((obj) => this.product = obj)
    this.data.currentProduct('1')
  }

  getProduct(id_category) {
    this.data.currentProduct(id_category)
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category = []
  constructor(private data: ProductService) { }

  ngOnInit() {
    this.data.currentCategory();
    this.data.category_as.subscribe((obj) => this.category = obj)
  }
   click_(){
     console.log(this.category);
   } 

}

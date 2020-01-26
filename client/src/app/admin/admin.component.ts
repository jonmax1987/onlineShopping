import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private data:ProductService) { }
 
  product;
  this_product={};
  name;
  price;
  image;
  id_category;

  ngOnInit() {
    this.data.product_as.subscribe((obj)=>this.product=obj);
    this.data.admin_product_as.subscribe((obj)=>this.this_product=obj);
  }
  
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  title = 'sidebar';

  changeProduct(obj){
    this.data.addProduct(obj);
  }
}

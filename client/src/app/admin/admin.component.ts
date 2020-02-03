import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private data: ProductService) { }

  product;
  this_product = {};
  id_product;
  name;
  price;
  image;
  id_category;
  message;
  alert = true;

  ngOnInit() {
    this.data.product_as.subscribe((obj) => this.product = obj);
    this.data.admin_product_as.subscribe((obj) => this.name = obj.name);
    this.data.admin_product_as.subscribe((obj) => this.price = obj.price);
    this.data.admin_product_as.subscribe((obj) => this.image = obj.img);
    this.data.admin_product_as.subscribe((obj) => this.id_category = obj.id_category);
    this.data.admin_product_as.subscribe((obj) => this.id_product = obj.id);
    this.data.message_as.subscribe((obj) => this.message = obj);
  }

  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  title = 'sidebar';

  adminProductchange(obj) {
    this.data.adminProductchange(obj);
  }



  save() {

    var reg = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i;
    if (reg.test(this.image) == false) {
      this.image = btoa(this.image);
    }

    let obj = {
      name: this.name,
      price: this.price,
      img: this.image,
      id_category: this.id_category,
      id: this.id_product
    }

    this.data.addProduct(obj);

    setTimeout(() => {
      if (this.message == "The product is not in the system!!!") {
        this.alert = false;
      };
    }, 1000);

  };

  addNew() {
    this.id_product = 0;
    this.id_category = 0;
    this.price = 0;
    this.name = '';
    this.image = '';
  };


}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  search_
  all_product
  getSearch=[];
  user;
  constructor(private data: ProductService , private usersData: UsersService) { }

  ngOnInit() {
    this.data.get_all_product();
    this.data.all_product_as.subscribe((obj) => this.all_product = (obj));
    this.usersData.user_as.subscribe((obj) => this.user = (obj))
    this.usersData.changeUser('guest');
  }

  search() {
    let arr = [];
    this.getSearch = [];
    arr = this.all_product; 
      for(let i = 0; i < arr.length; i++){
        if(arr[i].name.indexOf(this.search_)!= -1){
          console.log(arr[i]); 
          this.getSearch.push(arr[i])
        }
      }
        this.data.changeProduct(this.getSearch);
  };



}

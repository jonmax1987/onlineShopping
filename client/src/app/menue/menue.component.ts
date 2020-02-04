import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  search_;
  all_product;
  getSearch=[];
  user;
  product_cart;
  change_bill;
  constructor(private data: ProductService , private usersData: UsersService) { }

  ngOnInit() {
    this.usersData.user_as.subscribe((obj) => this.user = (obj));
    this.data.order_as.subscribe((obj)=>this.change_bill=obj);
    this.data.all_product_as.subscribe((obj) => this.all_product = obj);
    this.usersData.changeUser("guest");    
    this.data.search_as.subscribe((obj)=>this.search_=obj);
  }

  search() {
    if(this.change_bill == true){
      // let arr = [];
      // arr = this.all_product; 
      //   for(let i = 0; i < arr.length; i++){
      //     if(arr[i].name.indexOf(this.search_)!= -1){
      //       console.log(arr[i]); 
      //     }
      //   }
      //   return;
      this.data.changeSearch(this.search_);
    }
    console.log(this.all_product);
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

  signOut(){
    // this.usersData.changeUser({ username: 'guest' });
    this.data.cleanUser();
  };

}

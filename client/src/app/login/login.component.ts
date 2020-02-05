import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private data: ProductService, private usersData: UsersService) { }

  isDisabled = true;

  username = "";
  password = "";
  alert = true;
  start_shopping = true;
  resume_shopping = true;
  hide_input = false;
  message_cart;
  users;
  message_title='login';

  ngOnInit() {
    // this.data.changeSign();
    // this.data.changeOut();
    this.data.message_cart_as.subscribe((obj) => this.message_cart = obj);
    this.usersData.user_as.subscribe((obj) => this.users = obj);
  }

  send() {
    let obj = {
      username: this.username,
      password: this.password
    }
   
    fetch("http://localhost:3000/users/", {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          let token = res.data.token;
          this.usersData.changeUser(res.data.id_user[0]);
          this.data.setToken(token);
          this.usersData.changeIdUser(res.data.id_user[0].id);
          this.data.currentCart(res.data.id_user[0].id);
          this.data.get_all_product();
          this.data.changeusername(obj.username);
          if (this.users.role == 0) {
            this.router.navigate(['/admin']);
          }
          if (this.users.role == 1) {
          this.data.cheeckIfCartExist();
          }
        } else {
          this.alert = false;
          var that = this;
          setTimeout(function () {
            that.alert = true;
          }, 5000);
        }
      }), (error) => {
        console.log("error:", error);
      }
  };

  cheeckIfCartExist() {
    var that = this;
    setTimeout(function () {
      if (that.message_cart == 'cart exist') {
        that.resume_shopping = false;
        that.message_title='Continue shopping!!!'
      };
      if (that.message_cart == 'create-cart-successfully') {
        that.start_shopping = false;
        that.message_title='Welcome back!!!'
      };
    }, 1000);

  };

 


}


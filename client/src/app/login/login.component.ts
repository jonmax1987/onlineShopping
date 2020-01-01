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

  username = "";
  password = "";
  alert = true;

  ngOnInit() {
    this.data.changeSign();
    this.data.changeOut();
  }

  send() {
    let obj = {
      username: this.username,
      password: this.password
    }
    this.data.changeusername(obj.username)
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
          localStorage.setItem("token", res.data.token);
          this.usersData.changeIdUser(res.data.id_user[0].id);
          this.router.navigate(['/main']);
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

}


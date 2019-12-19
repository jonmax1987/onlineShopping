import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private data: ProductService) { }

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
    fetch("http://localhost:3000/users/loginjwt", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          localStorage.setItem("token", res.data);
          this.router.navigate(['/admin']);
          console.log(res);
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


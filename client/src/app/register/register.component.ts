import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  id
  email;
  password
  passwordConfirm
  city
  street
  name
  last_name
  step_1 = false;
  step_2 = true;
  alert = true;
  alert_message = '';
  button = 'Next';

  constructor(private usersData: UsersService, private data: ProductService, private router: Router) { }

  ngOnInit() {

  }

  click() {
    if (this.id.length != 9 || this.id == null || this.id == undefined) {
      this.alert_message += 'id Must only be 9 digits long!!!  '
    }
    if (this.email == null || this.email == undefined || this.email == '') {
      this.alert_message += 'email must be ok!!!  '
    };
    if (this.password.length < 4) {
      this.alert_message += 'Password length must be 4 characters!!!   '
    };
    if (this.password != this.passwordConfirm) {
      this.alert_message += 'The password does not match!!!  ';
    };
    if (this.alert_message != '') {
      this.alert = false
      let that = this;
      setTimeout(() => {
        that.alert = true;
        that.alert_message = '';
      }, 5000);
      return;
    };

    if (!this.step_1) {
      this.step_1 = true;
      this.step_2 = false;
      this.button = 'SUBMIT'
      return;
    }
    if (this.city == null || this.city == undefined || this.city == '') {
      this.alert_message += 'city must bee exist!!!  '
    };
    if (this.street == null || this.street == undefined || this.street == '') {
      this.alert_message += 'street must bee exist!!!  '
    };
    if (this.name == null || this.name == undefined || this.name == '') {
      this.alert_message += 'name must bee exist!!!  '
    };
    if (this.last_name == null || this.last_name == undefined || this.last_name == '') {
      this.alert_message += 'Last Name must bee exist!!!  '
    };
    if (this.alert_message != '') {
      this.alert = false
      let that = this;
      setTimeout(() => {
        that.alert = true;
        that.alert_message = '';
      }, 5000);
      return;
    };
    let object = {
      id: this.id,
      email: this.email,
      password: this.password,
      city: this.city,
      street: this.street,
      name: this.name,
      last_name: this.last_name
    }
    fetch('http://localhost:3000/users/', {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let token = res.data.token;
        this.data.setToken(token);
        this.usersData.changeUser(res.data.user[0]);
        this.usersData.changeIdUser(res.data.user[0].id);
        this.data.currentCart(res.data.user[0].id);
        this.router.navigate(['/main']);
      })

  }
  
  back() {
    if (!this.step_1) {
      this.step_1 = true;
      this.step_2 = false;
      this.button = 'SUBMIT'
      return;
    } else {
      this.step_1 = !true;
      this.step_2 = !false;
      this.button = 'Next'
    }
  };

}
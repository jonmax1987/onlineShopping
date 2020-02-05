import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

import { from } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  city = '';
  street = '';
  date = '';
  credit_card;
  user;
  showModal: boolean;
  message;
  delivery_date;
  alert = true;
  alert_credit = true;

  produc_cart;
  total;

  token;

  object = {
    city: '',
    street: '',
    date: '',
    credit_card: '',
  }

  text = 'bill.txt';
  product_cart;
  constructor(private data: ProductService, private userdata: UsersService, private router: Router) { }

  ngOnInit() {
    this.data.token_as.subscribe((str)=>this.token=str);
    if(this.token == ''){
      this.router.navigate(['/firstpage']);
    };
    this.data.getDataOrder();
    this.userdata.user_as.subscribe((obj) => this.object.city = (obj['city']));
    this.userdata.user_as.subscribe((obj) => this.object.street = (obj['street']));
    this.userdata.user_as.subscribe((obj) => this.user = obj);
    this.data.show_modall_as.subscribe((bool) => this.showModal = bool);
    this.data.message_modall_as.subscribe((msg) => this.message = msg);
    this.data.product_cart_as.subscribe((obj) => this.product_cart = obj);
    this.data.orders_data_as.subscribe((obj) => this.delivery_date = obj);
    this.data.product_cart_as.subscribe((obj) => this.produc_cart = obj);
    this.data.total_as.subscribe((obj) => this.total = obj);
  }




  downloadPDF() {
    const doc = new jsPDF();
    let row = 15
    this.produc_cart.map((obj, indx) => {
      doc.text('product:' + obj.name + 'count:' + JSON.stringify(obj.count) + 'price:' + JSON.stringify(obj.price), 15, row);
      row = row + 10;
    })
    doc.text('total:' + this.total, 15, row)
    doc.save('pdf.pdf');
  };

  dblclick(atr) {
    if (atr == "date") {
      this.object[atr] = (new Date()).toISOString().split('T')[0];
      this[atr] = this.object[atr];
      this.validDate();
    }
    this[atr] = this.object[atr];
  };


  validDate() {
    this.alert = true;
    let count_delivery = 0;
    this.delivery_date.map((obj) => {
      if (this.date == obj.delivery_date) {
        count_delivery = count_delivery + 1;
        if (count_delivery > 2) {
          this.alert = false;
          return;
        }
      }
    })
  };

  order() {
    if (!this.alert) {
      alert('wrong!')
      return;
    }
    if (this.ValidateCreditCardNumber()) {
      let id = this.user._id;
      let obj = {
        city: this.city,
        street: this.street,
        deliveri_date: this.date,
        digits: this.credit_card,
        id_user: id,
      }
      this.data.setOrder(obj);
      return;
    }
    this.alert_credit = false;
  }

  // Modal Close
  hide() {
    this.data.setShowModall(false);
    this.userdata.changeUser({ username: 'guest' });
    this.data.setToken({});
    this.data.changeusername('guest')
    this.router.navigate(['/firstpage']);
  }

  ValidateCreditCardNumber() {
    // var ccNum = document.getElementById("cardNum").value;
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;
    console.log(this.credit_card);

    if (visaRegEx.test(this.credit_card)) {
      isValid = true;
    } else if (mastercardRegEx.test(this.credit_card)) {
      isValid = true;
    } else if (amexpRegEx.test(this.credit_card)) {
      isValid = true;
    } else if (discovRegEx.test(this.credit_card)) {
      isValid = true;
    }

    if (isValid) {
      alert("Thank You!");
      return true;
    } else {
      alert("somthing wronge!!!")
      return false;
    }
  }

  alertCredit() {
    this.alert_credit = true;
  }

  // download(filename, text) {
  //   let object = '';
  //   this.product_cart.map((obj) => {
  //     object += obj.name;
  //     object += obj.price;
  //   });
  //   console.log(object);

  //   var element = document.createElement('a');
  //   element.style.display = 'none';

  //   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(object));

  //   element.setAttribute('download', filename);
  //   document.body.appendChild(element);

  //   element.click();

  //   document.body.removeChild(element);

  // }
}

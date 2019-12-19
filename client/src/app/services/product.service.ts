import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }



  private category = new BehaviorSubject([]);
  category_as = this.category.asObservable();

  currentCategory() {
    fetch('http://localhost:3000/product/category')
      .then((res) => res.json())
      .then((res) => {
        this.category.next(res.data);
        console.log(res.data);
      }), (error) => {
        console.log("error:", error);
      }
  }


  private product = new BehaviorSubject([]);
  product_as = this.product.asObservable();


  currentProduct(id_category) {
    let obj = {
      id_category: id_category
    }
    fetch("http://localhost:3000/product/get_product", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        this.product.next(res.data)
      }), (error) => {
        console.log("error:", error);
      }
  }


  // private cart = new BehaviorSubject([]);
  // cart_as = this.cart.asObservable();


  private product_cart = new BehaviorSubject([]);
  product_cart_as = this.product_cart.asObservable();

  currentProduct_cart(object) {
    let obj = {
      // id_category: object
    }
    fetch("http://localhost:3000/product/item", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        this.product.next(res.data)
      }), (error) => {
        console.log("error:", error);
      }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////
  private signOut = new BehaviorSubject(true);
  signOut_as = this.signOut.asObservable();


  changeOut() {
    let token = localStorage.getItem('token');
    if (token) {
      this.signOut.next(false);
      return
    }
    this.signOut.next(true);
  };

  ///////////////////////////////////////
  private username = new BehaviorSubject('guest');
  username_as = this.username.asObservable();


  changeusername(username) {
    this.username.next(username);
  };

  ////////////////////////////////////////////
  private sign = new BehaviorSubject(false);
  sign_as = this.sign.asObservable();

  changeSign() {
    let localToken = localStorage.getItem('token');
    if (localToken) {
      this.sign.next(true)
      return
    }
    console.log(localToken);

    this.sign.next(false);
  };

  ///////////////////////////////////////////////
  private id_user = new BehaviorSubject([]);
  userid_as = this.id_user.asObservable();

  changeUserId(id) {
    this.id_user.next(id);
  };

  private id_bank = new BehaviorSubject([]);
  bankid_as = this.id_bank.asObservable();

  changeBankId(id) {
    this.id_bank.next(id);
  };

  private user = new BehaviorSubject([]);
  usersAcount = this.user.asObservable();

  getUserAcount() {
    fetch('http://localhost:3000/users/users')
      .then((res) => res.json())
      .then((res) => {
        this.user.next(res.data);
        console.log(res.data);
      }), (error) => {
        console.log("error:", error);
      }
  };


  private bank = new BehaviorSubject([]);
  bankAcount = this.bank.asObservable();

  getBankAcount() {
    fetch('http://localhost:3000/bank/acount')
      .then((res) => res.json())
      .then((res) => {
        this.bank.next(res.data);
        console.log(res.data);
      }), (error) => {
        console.log("error:", error);
      }
  };


  updatAcount(obj) {
    console.log(obj);
    fetch("http://localhost:3000/bank/acount", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        this.getBankAcount();
      }), (error) => {
        console.log("error:", error);
      }
  };

  updatUser(obj) {
    fetch("http://localhost:3000/users/user", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        this.getUserAcount();
      }), (error) => {
        console.log("error:", error);
      }
  };

  addUser(obj) {
    fetch("http://localhost:3000/users/user", {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);

      }), (error) => {
        console.log("error:", error);
      }
  };

  addBank(obj) {
    console.log(obj);
    fetch("http://localhost:3000/bank/acount", {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);

      }), (error) => {
        console.log("error:", error);
      }
  };
  deleteUserAndAccount(user) {
    console.log(user);
    fetch("http://localhost:3000/bank/acount", {
      method: "DELETE",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        fetch("http://localhost:3000/users/user", {
          method: "DELETE",
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.message);
            this.getUserAcount();
          }), (error) => {
            console.log("error:", error);
          }
      }), (error) => {
        console.log("error:", error);
      }


  };

}

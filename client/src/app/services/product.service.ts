import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

/////////////////////jwt///////////////////////////////////////////////////////
private token = new BehaviorSubject('');
token_as = this.token.asObservable();

setToken(obj){
  this.token.next(obj)
  console.log(this.token.value);
  
};

  /////////////////////category////////////////////////////////////////////////////
  private category = new BehaviorSubject([]);
  category_as = this.category.asObservable();

  currentCategory(jwt) {
    fetch(`http://localhost:3000/product/category/:token?token=${jwt}`)
      .then((res) => res.json())
      .then((res) => {
        this.category.next(res.data);
        console.log(res.data);
      }), (error) => {
        console.log("error:", error);
      }
  }

  ////////////////////product/////////////////////////////////////////////
  private all_product = new BehaviorSubject([]);
  all_product_as = this.all_product.asObservable();


  get_all_product() {
    fetch("http://localhost:3000/product/get_product")
      .then((res) => res.json())
      .then((res) => {
        res.data.map((obj) => {
          obj.count = 0;
          obj.add = true;
        });
        this.all_product.next(res.data)
      }), (error) => {
        console.log("error:", error);
      }
  }


  private search_product = new BehaviorSubject([]);
  search_product_as = this.search_product.asObservable();

  current_product(product) {
    this.search_product.next(product)
    console.log(this.search_product.value);

  };
  /////////////////////get product by category///////////////////////////////


  /*change to 'get' and send param*/
  private product = new BehaviorSubject([]);
  product_as = this.product.asObservable();


  currentProduct(id_category) {
    let obj = {
      id_category: id_category,
      token: localStorage.getItem('token')
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
        res.data.map((obj) => {
          obj.count = 0;
          obj.add = true;
        });
        this.product.next(res.data)
      }), (error) => {
        console.log("error:", error);
      }
  }

  changeProduct(product) {
    this.product.next(product);
  }

  /////////////////////cart////////////////////////////////////////////////////////////
  private cart = new BehaviorSubject([]);
  cart_as = this.cart.asObservable();


  currentCart(id) {
    fetch(`http://localhost:3000/product/cart/:id_user?id_user=${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        console.log(res.data);
        this.cart.next(res.data);
        this.get_product_cart()
      }), (error) => {
        console.log("error:", error);
      }
  }

  ////////////////////products cart///////////////////////////////////////////////////////
  private product_cart = new BehaviorSubject([]);
  product_cart_as = this.product_cart.asObservable();

  get_product_cart() {
    fetch(`http://localhost:3000/product/item/:id_cart?id_cart=${this.cart.value[0].id}`)
      .then((res) => res.json())
      .then((res) => {
        this.product_cart.next(res.data)
        this.total_count();
      }), (error) => {
        console.log("error:", error);
      }
  }



  add_Product_cart(object) {
    let obj = {
      id_product: object.id_product,
      count: object.count,
      price: object.price,
      id_cart: object.id_cart
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
        this.get_product_cart();
      }), (error) => {
        console.log("error:", error);
      }
  }


  deleteItemCart(id_product) {
    let obj = {
      id_product: id_product
    }
    fetch("http://localhost:3000/product/item", {
      method: "DELETE",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        this.get_product_cart();
      }), (error) => {
        console.log("error:", error);
      }
  }


  private total = new BehaviorSubject({});
  total_as = this.total.asObservable();

  total_count() {
    let total_global = 0
    this.product_cart.value.map((obj) => {
      let count = obj.count * obj.price
      total_global = total_global + count
    })
    this.total.next(total_global)


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
  // private id_user = new BehaviorSubject([]);
  // userid_as = this.id_user.asObservable();

  // changeUserId(id) {
  //   this.id_user.next(id);
  // };

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

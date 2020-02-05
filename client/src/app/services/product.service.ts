import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router: Router, private userData: UsersService) { }

  /////////////////////jwt///////////////////////////////////////////////////////
  private token = new BehaviorSubject('');
  token_as = this.token.asObservable();

  setToken(obj) {
    this.token.next(obj)
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
    console.log(this.token.value);

    fetch(`http://localhost:3000/product/get_all_product/:token?token=${this.token.value}`)
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
    fetch(`http://localhost:3000/product/get_product/:id_category?id_category=${id_category}&token=${this.token.value}`)
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


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////cart////////////////////////////////////////////////////////////
  private cart = new BehaviorSubject([]);
  cart_as = this.cart.asObservable();


  currentCart(id) {
    fetch(`http://localhost:3000/product/cart/:id_user?id_user=${id}&token=${this.token.value}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message == 'cart exist') {
          console.log(res.data);

          this.messageChange('cart exist');
        }
        if (res.message == 'create-cart-successfully') {
          this.messageChange(res.message);
        }
        // console.log(this.message_cart.value);
        console.log(res);
        this.cart.next(res.data);
        this.get_product_cart()
      }), (error) => {
        console.log("error:", error);
      }
  }

  //////////////////////message of cart /////////////////////////////////////////////////////////////////////
  private message_cart = new BehaviorSubject('');
  message_cart_as = this.message_cart.asObservable();

  messageChange(message) {
    this.message_cart.next(message);
    console.log(this.message_cart.value);

  }


  ////////////////////products cart///////////////////////////////////////////////////////
  private product_cart = new BehaviorSubject([]);
  product_cart_as = this.product_cart.asObservable();

  get_product_cart() {
    fetch(`http://localhost:3000/product/item/:id_cart?id_cart=${this.cart.value[0].id}&token=${this.token.value}`)
      .then((res) => res.json())
      .then((res) => {
        this.product_cart.next(res.data)
        this.total_count();
      }), (error) => {
        console.log("error:", error);
      }
  }


  //////////////////////add product//////////////////////////
  add_Product_cart(object) {
    let obj = {
      id_product: object.id_product,
      count: object.count,
      price: object.price,
      id_cart: object.id_cart,
      token: this.token.value
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

  ///////////////////delete////////////////////////////
  deleteItemCart(id_product) {
    let obj = {
      id_product: id_product,
      token: this.token.value
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

  /////////////////delete all////////////////////////////// 
  deleteAllItemCart() {
    let obj = {
      id_cart: this.cart.value[0].id,
      token: this.token.value
    }
    console.log(obj.id_cart);

    fetch("http://localhost:3000/product/allitem", {
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
  //////////////////total////////////////////////////
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
  //////////////////////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////order//////////////////////////////////

  private order = new BehaviorSubject(false);
  order_as = this.order.asObservable();


  changeOrder(bool) {
    this.order.next(bool);
  };

  private back = new BehaviorSubject(true);
  back_as = this.back.asObservable();


  changeback(bool) {
    this.back.next(bool);
  };

  setOrder(object) {
    let obj = {
      city: object.city,
      street: object.street,
      id_user: object.id_user,
      id_cart: this.cart.value[0].id,
      final_price: this.total.value,
      deliveri_date: object.deliveri_date,
      digits: object.digits,
      token: this.token.value
    }
    console.log(obj);
    fetch("http://localhost:3000/product/order", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        if (res.message == 'order added successfuly') {
          this.setShowModall(true);
          this.setMessageModall('Your purchase was successful!!!');
          let obj = {
            id_cart: this.cart.value[0].id,
            token: this.token.value
          }
          fetch("http://localhost:3000/product/cart", {
            method: "DELETE",
            body: JSON.stringify(obj),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res.message);
              this.cleanUser();
            }), (error) => {
              console.log("error:", error);
            }
          // this.router.navigate(['/firstpage'])
        };
      }), (error) => {
        console.log("error:", error);
        this.setMessageModall("error:" + error);
      }
  };

  cleanUser() {
    this.token.next('');
    this.userData.changeUser({});
    this.product.next([]);
    this.message_title.next('');
    this.resume_shopping.next(true);
    this.start_shopping.next(true);
    this.changeusername('guest');
  }

  ////////////////////////Validation on a date///////////////////////////////////////
  private orders_data = new BehaviorSubject([]);
  orders_data_as = this.orders_data.asObservable();

  getDataOrder() {
    fetch(`http://localhost:3000/product/order_date/:token?token=${this.token.value}`)
      .then((res) => res.json())
      .then((res) => {
        this.orders_data.next(res.data)
        console.log(res);
      });
  };


  ////////////////////Modall/////////////////////
  private show_modall = new BehaviorSubject(false);
  show_modall_as = this.show_modall.asObservable();

  setShowModall(bool_) {
    this.show_modall.next(bool_)
  };



  private message_modall = new BehaviorSubject('');
  message_modall_as = this.message_modall.asObservable();

  setMessageModall(msg) {
    this.message_modall.next(msg)
  };

  ///////////////////if order page is true pipe...////////////////////////////////////// 
  orderFun() {
    if (this.order.value == true) {
      return true;
    } else {
      return false;
    }
  };


  private search = new BehaviorSubject([]);
  search_as = this.search.asObservable();

  changeSearch(obj) {
    this.search.next(obj);
  };


  // };
  //////////////////////////////////////////////////////
  private message = new BehaviorSubject('');
  message_as = this.message.asObservable();





  // ///////////////////////////////////////
  private username = new BehaviorSubject('guest');
  username_as = this.username.asObservable();


  changeusername(username) {
    this.username.next(username);
  };



  


  /////////////////////////////////////////////////////////////////////
  private admin_product = new BehaviorSubject({ name: '', price: 0, img: '', id_category: 0, id: 0 });
  admin_product_as = this.admin_product.asObservable();


  adminProductchange(obj) {
    this.admin_product.next(obj);
  };

  addProduct(obj) {
    obj.token = this.token.value;

    if (obj.id == 0) {
      fetch("http://localhost:3000/product/product", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.currentProduct(1);
          console.log(res.message);
          this.message.next(res.message);
        }), (error) => {
          console.log("error:", error);
        }
    } else {
      fetch("http://localhost:3000/product/product", {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.currentProduct(1);
          console.log(res.message);
          this.message.next(res.message);
        }), (error) => {
          console.log("error:", error);
        }
    };

  };


  private message_title = new BehaviorSubject('');
  message_title_as = this.message_title.asObservable();

  private resume_shopping = new BehaviorSubject(true);
  resume_shopping_as = this.resume_shopping.asObservable();

  private start_shopping = new BehaviorSubject(true);
  start_shopping_as = this.start_shopping.asObservable();

  private create_date = new BehaviorSubject('');
  create_date_as = this.create_date.asObservable();


  cheeckIfCartExist() {
    var that = this;
    setTimeout(function () {
      if (that.message_cart.value == 'cart exist') {
        that.resume_shopping.next(false);
        that.message_title.next('There is an active cart!!!')
        that.create_date.next(that.cart.value[0].create_date);
      };
      if (that.message_cart.value == 'create-cart-successfully') {
        that.getLastOrder();
        that.start_shopping.next(false);
        that.message_title.next('Welcome back!!!');
      };
    }, 1000);

  };

  private last_order = new BehaviorSubject({});
  last_order_as = this.last_order.asObservable();

  getLastOrder() {
    let id_user;
    this.userData.user_as.subscribe((num) => id_user = num);

    fetch(`http://localhost:3000/product/last_order/:id_user?id_user=${id_user._id}`)
      .then((res) => res.json())
      .then((res) => {
        let last_order_length = res.data.length - 1;
        let last_order = res.data[last_order_length];

        if (last_order_length == 0) {
          this.message_title.next('Welcome new!!!');
        } else {
          this.last_order.next(last_order);
          this.message_title.next('Welcome back!!!');
        }
      }), (error) => {
        console.log("error:", error);
      }
  };

}

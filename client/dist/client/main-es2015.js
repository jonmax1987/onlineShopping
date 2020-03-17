(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <ng-sidebar-container>\n                <!-- A sidebar -->\n                <ng-sidebar [(opened)]=\"_opened\" mode=\"push\" autoCollapseWidth=500>\n                    <!-- 'kind of table' -->\n                    <div class=\"card bg-secondary\">\n                        <div class=\"card-title\">\n                            <div class=\"btn btn-info\" (click)='addNew()'>plus</div>\n                            <hr>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name:</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='name' name=\"name\" id=\"name\"\n                                    placeholder=\"Name...\" required>\n                            </div>\n                            <div class=\"form-group\" [hidden]='hide_input'>\n                                <label for=\"price\">Price:</label>\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]='price' name=\"price\" id=\"price\"\n                                    placeholder=\"Price...\" required>\n                            </div>\n                            <div class=\"form-group\" [hidden]='hide_input'>\n                                <label for=\"id_category\">ID Category :</label>\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]='id_category' name=\"id_category\"\n                                    id=\"id_category\" placeholder=\"ID Category...\" required>\n                            </div>\n                            <div class=\"form-group\" [hidden]='hide_input'>\n                                <label for=\"image\">Image :</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]='image' name=\"picther\" id=\"image\"\n                                    placeholder=\"image...\" required>\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"btn btn-info\" (click)=save()>SAVE</div>\n                        </div>\n                    </div>\n                </ng-sidebar>\n\n                <!-- Page content -->\n\n                <div ng-sidebar-content class=\"float-rigth\">\n                    <button (click)=\"_toggleSidebar()\"><i class=\"fa fa-bars\"></i></button>\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col*\">\n                                <div [ngClass]=\"product_Col\">\n                                    <div class=\"row\">\n                                        <div class=\"col m-1\">\n                                            <app-category></app-category>\n                                            <div [hidden]='alert' class=\"alert alert-danger\">{{message}}</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 mb-3 btn\" *ngFor='let obj of product;let i = index'\n                                            (click)=adminProductchange(obj)>\n                                            <div class=\"card m-1 bg-secondary\" style=\"max-width: 25rem;\">\n                                                <div class=\"row no-gutters\">\n                                                    <div class=\"col-md-6\">\n                                                        <img src={{obj.img|img}} class=\"card-img p-2 \" alt=\"...\">\n                                                    </div>\n                                                    <div class=\"col-md-6\">\n                                                        <div class=\"card-body\">\n                                                            <div class=\"card-text float-right\">{{obj.name}}</div>\n                                                            <br>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-sidebar-container>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-doc/api-doc.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-doc/api-doc.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"text-center\">api-doc </h1>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"table table-dark\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th>description</th>\n                            <th>Method + path</th>\n                            <th>Request/Response</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor='let api of object; let index = i'>\n                        <tr>\n                            <td>{{api.description}}</td>\n                            <td>{{api.Method_path}}</td>\n                            <td><div><strong> Request:</strong></div>{{api.Request}}<div><strong>Response:</strong></div>{{api.Response}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("      <!-- <h2>Basic Table</h2>\n      <p>Angular 8 open bootstrap 4 modal popup with dynamic data on click on bootstrap table row</p>\n      <table class=\"table table-hover\">\n            <thead>\n                  <tr>\n                        <th>Firstname</th>\n                        <th>Lastname</th>\n                        <th>Email</th>\n                        <th>Action</th>\n                  </tr>\n            </thead>\n            <tbody>\n                  <tr class=\"table-primary\">\n                        <td id=\"firstname1\">John</td>\n                        <td id=\"lastname1\">Doe</td>\n                        <td id=\"email1\">john@example.com</td>\n                        <td id=\"1\" (click)=\"onClick($event)\" style=\"cursor: pointer;font-weight: bold;\">Show</td>\n                  </tr>\n                  <tr class=\"table-success\">\n                        <td id=\"firstname2\">Mary</td>\n                        <td id=\"lastname2\">Moe</td>\n                        <td id=\"email2\">mary@example.com</td>\n                        <td id=\"2\" (click)=\"onClick($event)\" style=\"cursor: pointer;font-weight: bold;\">Show</td>\n                  </tr>\n                  <tr class=\"table-danger\">\n                        <td id=\"firstname3\">July</td>\n                        <td id=\"lastname3\">Dooley</td>\n                        <td id=\"email3\">july@example.com</td>\n                        <td id=\"3\" (click)=\"onClick($event)\" style=\"cursor: pointer;font-weight: bold;\">Show</td>\n                  </tr>\n            </tbody>\n      </table> -->\n\n\n<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mb-5\">\n      <ngx-spinner></ngx-spinner>\n      <app-menu></app-menu>\n      <hr>\n      <hr>\n      <hr>\n      \n      <main>\n          \n            <div class=\"container-fluid mt-5\">\n                  <div class=\"row\">\n                        <div class=\"col-md-12\">\n                              <router-outlet></router-outlet>\n                        </div>\n                  </div>\n                  <hr>\n            </div>\n      </main>\n      <footer class=\"container\">\n            <p>&copy; Company 2019-2020</p>\n      </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div [hidden]='back' class=\"col-md-3 btn btn-dark btn-sm\" (click)='backToShop()'>back To Shop</div>\n            <div class=\"table table-dark\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th [hidden]='order'>\n                                index\n                            </th>\n                            <th>\n                                product\n                            </th>\n                            <th>\n                                count\n                            </th>\n                            <th>\n                                price\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr  *ngFor='let item of products_cart | mark:term; let i = index'>\n                            <td [hidden]='order'>\n                                {{i+1}}\n                            </td>\n                            <td>\n                                {{item.name}}\n                            </td>\n                            <td>\n                                {{item.count}}\n                            </td>\n                            <td>\n                                price {{item.price}} ₪\n                            </td>\n                            <td [hidden]='order'>\n                                <button  class=\"btn btn-secondary btn-circle btn-circle-sm m-1\"\n                                    (click)='deleteItem(item)'><i class=\"fas fa-trash\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <p [hidden]='back' class=\"text-center\">NO CHANGES PERMITTED HERE!</p>\n    <div class=\"row\">\n        <div class=\"col \">\n            Total: {{total}}₪\n        </div>\n        <div [hidden]='order' class=\"col-md-3 btn btn-dark btn-sm\" (click)='sendToOrder_()'>Order</div>\n        <div [hidden]='order' class=\"col-md-3 btn btn-dark btn-sm\" (click)='deleteAll()'>delete all</div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-dark \">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" href=\"#\">Category</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\" *ngFor='let obj of category;let i =index'>\n                <li class=\"nav-item\">\n                    <a (click)='getProduct(obj.id)' class=\"nav-link text-info\">{{obj.name}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-page/first-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first-page/first-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <app-login></app-login>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"text-center\">\n                <h3>Our products</h3>\n                <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <h5>Milk products</h5>\n                            <img class=\"d-block w-100\" src={{sum_img[0].img|img}} alt=\"First slide\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                              </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <h5>Fish and meat</h5>\n                            <img class=\"d-block w-100\" src={{sum_img[1].img|img}} alt=\"Second slide\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                              </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <h5>Wines and drinks</h5>               \n                            <img class=\"d-block w-100\" src={{sum_img[2].img|img}} alt=\"Third slide\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                              </div>\n                        </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"text-center\">\n                <h3>About Us</h3>\n            </div>\n            <br>\n            <br>\n            <div class=\"text-center\">\n                <div class=\"mb-1\">amount of orders on the site: {{order_count}}  <i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i></div>\n                <div class=\"mb-1\">products available on the site: {{product_count}} <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i></div>\n                <div class=\"alert alert-secondary text-center\" [hidden]='start_shopping_alert'>\n                    <div class=\"text-center\">{{message_title}}</div>\n                    <div class=\"text-center\">Order date: {{last_order.Order_date}}</div>\n                    <div class=\"text-center\">Final price: {{last_order.final_price}}</div>\n                </div>\n            </div>\n            <div class=\"alert alert-secondary text-center m-2 \" [hidden]='resume_shopping_alert'>\n                <div>{{message_title}}</div>\n                <div>{{create_data_cart | date:'medium' }}</div>\n                <div>final amount: {{total}}₪</div>\n            </div>\n            <div class=\" d-flex justify-content-center\">\n                <div class=\"btn btn-success\" [hidden]='start_shopping_alert' (click)='startshopp()'>Start Shopping</div>\n            </div>\n            <div class=\"d-flex justify-content-center\">\n                <div class=\"btn btn-success\" [hidden]='resume_shopping_alert' (click)='startshopp()'>Resume Shopping\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3 class=\"text-center\">{{message_title}}</h3>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n            <div [hidden]='alert' class=\"alert alert-danger\">Username or password incorrect!!!</div>\n            <form action=\"/action_page.php\" class=\"was-validated\">\n                <div class=\"form-group\" [hidden]='hide_input'>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]='username' name=\"username\" id=\"username\"\n                        placeholder=\"Username...\" required>\n                </div>\n                <div class=\"form-group\" [hidden]='hide_input'>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\" id=\"password\"\n                        placeholder=\"Password...\" required>\n                </div>\n                <div class=\"form-group form-check\" [hidden]='hide_input'>\n                    <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\" required> I agree \n                    </label>\n                </div>\n                <div class=\"btn btn-info\" (click)='send()' [hidden]='hide_input'>Login</div>\n            </form>\n            <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"nav-link active\" [hidden]='hide_input'>sign up</a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ng-sidebar-container>\n          <!-- A sidebar -->\n          <ng-sidebar [(opened)]=\"_opened\" mode=\"push\" autoCollapseWidth=500>\n            <app-cart></app-cart>\n          </ng-sidebar>\n        \n          <!-- Page content -->\n        \n          <div ng-sidebar-content class=\"float-rigth\">\n            <button (click)=\"_toggleSidebar()\"><i class=\"fa fa-bars\"></i></button>\n            <app-product></app-product>\n          </div>\n        \n        </ng-sidebar-container>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menue/menue.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menue/menue.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-dark fixed-top\">\n\n    <a class=\"navbar-brand\" href=\"#\">Online Shopping</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto \">\n            <li class=\"nav-item\">\n                <a routerLink=\"/api\" routerLinkActive=\"active\" class=\"nav-link active\">API doc</a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                <a routerLink=\"/main\" routerLinkActive=\"active\" class=\"nav-link active\">Main Page</a>\n            </li>\n            <li class=\"nav-item\">\n                <a routerLink=\"/sidebar\" routerLinkActive=\"active\" class=\"nav-link active\">Saidebar</a>\n            </li>\n            <li class=\"nav-item\">\n                <a routerLink=\"/order\" routerLinkActive=\"active\" class=\"nav-link active\">Order</a>\n            </li> -->\n        </ul>\n        <div class=\"nav-link\" href=\"#\">Hello {{user.username}}</div>\n        <div class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" (keyup)='search()'\n                [(ngModel)]='search_'>\n        </div>\n        <a class=\"btn btn-outline-primary\" href=\"#\" (click)='signOut()'>Sign up/in</a>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">User Details:</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hide()\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        <p>{{message}}</p>\n        <div class=\"btn btn-info\" (click)='downloadPDF()'>download</div>\n      </div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"hide()\">OK</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p>my cart</p>\n      <hr>\n      <app-cart></app-cart>\n    </div>\n    <div class=\"col-md-6\">\n      <span>Order</span>\n      <hr>\n      <div>Shipping Details</div>\n      <hr>\n      <div class=\"input-group mb-1\" name=\"city\">\n        <label for=\"\">Enter  City  :   ...</label>\n        <span class=\"input-group-btn\" (dblclick)=\"dblclick('city')\">\n          <button class=\"btn btn-default\" type=\"submit\">\n            <i class=\"fas fa-arrow-alt-circle-down\"></i>\n          </button>\n        </span>\n        <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]='city' />\n      </div>\n      <div class=\"input-group mb-1\">\n        <label for=\"\">Enter  Street :.</label>\n        <span class=\"input-group-btn\" (dblclick)=\"dblclick('street')\">\n          <button class=\"btn btn-default\" type=\"submit\">\n            <i class=\"fas fa-arrow-alt-circle-down\"></i>\n          </button>\n        </span>\n        <input type=\"text\" class=\"form-control\" name=\"street\" [(ngModel)]='street' (dblclick)=\"dblclick($event)\" />\n      </div>\n      <h5 class=\"alert alert-danger\" [hidden]='alert'>you need to choose enothr date!!!</h5>\n      <div class=\"input-group mb-1\">\n        <label for=\"\">Delivery date</label>\n        <span class=\"input-group-btn\" (dblclick)=\"dblclick('date')\">\n          <button class=\"btn btn-default\" type=\"submit\">\n            <i class=\"fas fa-arrow-alt-circle-down\"></i>\n          </button>\n        </span>\n        <input type=\"date\" class=\"form-control\" (dblclick)='dblclick(shipping_date)' [(ngModel)]='date' (change)=\"validDate()\"/>\n      </div>\n      <p>payments:</p>\n      <hr>\n      <h5 class=\"alert alert-danger\" [hidden]='alert_credit'>Please provide a valid Visa number!!!</h5>\n      <div class=\"form-group\">\n        <input type=\"number\" class=\"form-control\"  [(ngModel)]='credit_card' (click)='alertCredit()' />\n      </div>\n      <div class=\"btn btn-info\" (click)='order()'>Order</div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div [ngClass]=\"product_Col\">\n            <div class=\"row\">\n                <div class=\"col m-1\">\n                    <app-category></app-category>\n                    <div [hidden]='alert' class=\"alert alert-danger\">Product quantity must be selected!!!</div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-3\" *ngFor='let obj of product;let i = index'>\n                    <div class=\"card m-1 bg-secondary\" style=\"max-width: 25rem;\">\n                        <div class=\"row no-gutters\">\n                            <div class=\"col-md-4\">\n                                <img src={{obj.img|img}} class=\"card-img p-2 \" alt=\"...\">\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"card-body\">\n                                    <div class=\"card-text float-right\">{{obj.name}}</div>\n                                    <br>\n                                    <div class=\"card-text \">מחיר: {{obj.price}}</div>\n                                    <hr />\n                                    <div class=\"float-right\">\n                                        <button class=\"btn btn-success btn-circle btn-circle-sm m-1\"\n                                            (click)=\"minus(obj)\"><i class=\"fas fa-minus\"></i></button>\n                                        <button class=\"btnTouchspin bootstrap-touchspin-down\" type=\"button\"\n                                            aria-label=\"הפחת 1\">{{obj.count}}</button>\n                                        <button class=\"btn btn-success btn-circle btn-circle-sm m-1\"\n                                            (click)=\"plus(obj)\"><i class=\"fas fa-plus\"></i></button>\n                                    </div>\n                                    <div [hidden]='obj.add' class=\"btn btn-info\" (click)='addProductInCart(obj)'>הוסף\n                                        לעגלה</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row \">\n        <div class=\"col-md-8\">\n            <div [hidden]=\"step_1\">\n                <header>\n                    <div class=\"row\">\n                        <p class=\"col-md-6\">sign in - user</p>\n                        <p class=\"col-md-6\">\"STEP 1\"</p>\n                    </div>\n                    <hr>\n                </header>\n                <main>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]='id' name=\"id\" placeholder=\"ID...\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" [(ngModel)]='email' name=\"email\" placeholder=\"Email...\"\n                            required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\"\n                            placeholder=\"Password...\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]='passwordConfirm' name=\"passwordConfirm\"\n                            placeholder=\"Password Confirm...\" required>\n                    </div>\n                </main>\n            </div>\n            <div [hidden]=\"step_2\">\n                <header>\n                    <div class=\"row\">\n                        <p class=\"col-md-6\">sign in - user</p>\n                        <p class=\"col-md-6\">\"STEP 2\"</p>\n                    </div>\n                    <hr>\n                </header>\n                <main>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]='city' name=\"city\" placeholder=\"City...\"\n                            required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]='street' name=\"street\"\n                            placeholder=\"Street...\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]='name' name=\"name\" placeholder=\"Name...\"\n                            required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]='last_name' name=\"last_name\"\n                            placeholder=\"Last Name...\" required>\n                    </div>\n                </main>\n            </div>\n            <footer>\n                <div class=\"alert alert-danger\" [hidden]='alert'>{{alert_message}}</div>\n                <div class=\"btn btn-info\" (click)='click()'>{{button}}</div>\n                <div class=\"btn btn-info\" (click)='back()' [hidden]='step_2'>back</div>\n                <a routerLink=\"/firstpage\" routerLinkActive=\"active\" class=\"nav-link active\">sign in</a>\n            </footer>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ng-sidebar-container{\r\n    height: 170vh;  \r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmctc2lkZWJhci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDE3MHZoOyAgXHJcbn0gXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminComponent = class AdminComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.this_product = {};
        this.alert = true;
        this._opened = true;
        this.title = 'sidebar';
    }
    ngOnInit() {
        this.data.token_as.subscribe((str) => this.token = str);
        if (this.token == '') {
            this.router.navigate(['/firstpage']);
        }
        ;
        this.data.product_as.subscribe((obj) => this.product = obj);
        this.data.admin_product_as.subscribe((obj) => this.name = obj.name);
        this.data.admin_product_as.subscribe((obj) => this.price = obj.price);
        this.data.admin_product_as.subscribe((obj) => this.image = obj.img);
        this.data.admin_product_as.subscribe((obj) => this.id_category = obj.id_category);
        this.data.admin_product_as.subscribe((obj) => this.id_product = obj.id);
        this.data.message_as.subscribe((obj) => this.message = obj);
    }
    _toggleSidebar() {
        this._opened = !this._opened;
    }
    adminProductchange(obj) {
        this.data.adminProductchange(obj);
    }
    save() {
        var reg = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i;
        if (reg.test(this.image) == false) {
            this.image = btoa(this.image);
        }
        let obj = {
            name: this.name,
            price: this.price,
            img: this.image,
            id_category: this.id_category,
            id: this.id_product
        };
        this.data.addProduct(obj);
        setTimeout(() => {
            if (this.message == "The product is not in the system!!!") {
                this.alert = false;
            }
            ;
        }, 1000);
    }
    ;
    addNew() {
        this.id_product = 0;
        this.id_category = 0;
        this.price = 0;
        this.name = '';
        this.image = '';
    }
    ;
};
AdminComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/api-doc/api-doc.component.css":
/*!***********************************************!*\
  !*** ./src/app/api-doc/api-doc.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1kb2MvYXBpLWRvYy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/api-doc/api-doc.component.ts":
/*!**********************************************!*\
  !*** ./src/app/api-doc/api-doc.component.ts ***!
  \**********************************************/
/*! exports provided: APIDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIDocComponent", function() { return APIDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let APIDocComponent = class APIDocComponent {
    constructor() { }
    ngOnInit() {
        this.getApi();
    }
    getApi() {
        fetch(`http://localhost:3000/api`)
            .then((res) => res.json())
            .then((res) => {
            this.object = res.data;
            console.log(res.data);
        }), (error) => {
            console.log("error:", error);
        };
    }
    ;
};
APIDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-doc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api-doc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-doc/api-doc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api-doc.component.css */ "./src/app/api-doc/api-doc.component.css")).default]
    })
], APIDocComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api-doc/api-doc.component */ "./src/app/api-doc/api-doc.component.ts");










const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'firstpage', component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_5__["FirstPageComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'api', component: _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_9__["APIDocComponent"] },
    { path: '', redirectTo: '/firstpage', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let AppComponent = class AppComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.title = 'client';
    }
    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 1500);
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menue_menue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menue/menue.component */ "./src/app/menue/menue.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _mark_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mark.pipe */ "./src/app/mark.pipe.ts");
/* harmony import */ var _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./api-doc/api-doc.component */ "./src/app/api-doc/api-doc.component.ts");
/* harmony import */ var _img_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img.pipe */ "./src/app/img.pipe.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _menue_menue_component__WEBPACK_IMPORTED_MODULE_7__["MenueComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_13__["ProductComponent"],
            _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_15__["FirstPageComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
            _mark_pipe__WEBPACK_IMPORTED_MODULE_19__["MarkPipe"],
            _api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_20__["APIDocComponent"],
            _img_pipe__WEBPACK_IMPORTED_MODULE_21__["ImgPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-circle {\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    padding: 0;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .btn-circle i {\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n  \r\n  .btn-circle-sm {\r\n    width: 25px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 0.9rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWNpcmNsZSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1jaXJjbGUtc20ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CartComponent = class CartComponent {
    constructor(data, usersData, spinner, router) {
        this.data = data;
        this.usersData = usersData;
        this.spinner = spinner;
        this.router = router;
    }
    ngOnInit() {
        this.usersData.id_user_as.subscribe((obj) => this.id_user = obj);
        this.data.cart_as.subscribe((obj) => this.cart = obj);
        this.data.currentCart(this.id_user);
        this.data.product_cart_as.subscribe((obj) => this.products_cart = obj);
        this.data.total_as.subscribe((obj) => this.total = obj);
        this.data.order_as.subscribe((obj) => this.order = (obj));
        this.data.back_as.subscribe((obj) => this.back = (obj));
        // this.data.cheeck_bill_as;
        this.data.search_as.subscribe((term) => this.term = term);
        var that = this;
        setTimeout(function () {
            that.data.get_product_cart();
            console.log(that.cart);
        }, 1000);
    }
    deleteItem(item) {
        this.data.deleteItemCart(item.id);
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 500);
    }
    deleteAll() {
        this.data.deleteAllItemCart();
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 500);
    }
    ;
    sendToOrder_() {
        this.data.changeOrder(true);
        this.data.changeback(false);
        this.router.navigate(['/order']);
    }
    ;
    backToShop() {
        this.data.changeOrder(false);
        this.data.changeback(true);
        this.router.navigate(['/main']);
    }
    ;
};
CartComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




let CategoryComponent = class CategoryComponent {
    constructor(data, spinner) {
        this.data = data;
        this.spinner = spinner;
        this.category = [];
        this.product = [];
    }
    ngOnInit() {
        this.data.token_as.subscribe((obj) => this.jwt = obj);
        this.data.currentCategory(this.jwt);
        this.data.category_as.subscribe((obj) => this.category = obj);
        this.data.product_as.subscribe((obj) => this.product = obj);
        this.data.currentProduct('1');
    }
    getProduct(id_category) {
        this.data.currentProduct(id_category);
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 500);
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/first-page/first-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/first-page/first-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/first-page/first-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FirstPageComponent = class FirstPageComponent {
    constructor(router, data) {
        this.router = router;
        this.data = data;
        this.order_count = 0;
        this.product_count = 0;
        this.sum_img = [];
    }
    ngOnInit() {
        this.getOrderCount();
        this.getProductCount();
        this.getImagesToExemple();
        this.data.resume_shopping_as.subscribe((bool) => this.resume_shopping_alert = bool);
        this.data.start_shopping_as.subscribe((bool) => this.start_shopping_alert = bool);
        this.data.message_title_as.subscribe((str) => this.message_title = str);
        this.data.create_date_as.subscribe((str) => this.create_data_cart = str);
        this.data.total_as.subscribe((str) => this.total = str);
        this.data.last_order_as.subscribe((str) => this.last_order = str);
    }
    // lastorder
    getImagesToExemple() {
        fetch('http://localhost:3000/product/sum_product')
            .then((res) => res.json())
            .then((res) => {
            this.sum_img = res.data;
            console.log(this.sum_img);
        }), (error) => {
            console.log("error:", error);
        };
    }
    ;
    getOrderCount() {
        fetch('http://localhost:3000/product/order')
            .then((res) => res.json())
            .then((res) => {
            let count = 'COUNT(*)';
            this.order_count = res.data[0][count];
            console.log(this.order_count);
        }), (error) => {
            console.log("error:", error);
        };
    }
    ;
    getProductCount() {
        fetch('http://localhost:3000/product/productcount')
            .then((res) => res.json())
            .then((res) => {
            let count = 'COUNT(*)';
            this.product_count = res.data[0][count];
            console.log(this.order_count);
        }), (error) => {
            console.log("error:", error);
        };
    }
    ;
    startshopp() {
        this.router.navigate(['/main']);
    }
    ;
};
FirstPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
FirstPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/first-page/first-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-page.component.css */ "./src/app/first-page/first-page.component.css")).default]
    })
], FirstPageComponent);



/***/ }),

/***/ "./src/app/img.pipe.ts":
/*!*****************************!*\
  !*** ./src/app/img.pipe.ts ***!
  \*****************************/
/*! exports provided: ImgPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPipe", function() { return ImgPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImgPipe = class ImgPipe {
    transform(value, ...args) {
        return atob(value);
    }
};
ImgPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'img'
    })
], ImgPipe);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, data, usersData) {
        this.router = router;
        this.data = data;
        this.usersData = usersData;
        this.isDisabled = true;
        this.username = "";
        this.password = "";
        this.alert = true;
        this.start_shopping = true;
        this.resume_shopping = true;
        this.hide_input = false;
        this.message_title = 'login';
    }
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
        };
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
            }
            else {
                this.alert = false;
                var that = this;
                setTimeout(function () {
                    that.alert = true;
                }, 5000);
            }
        }), (error) => {
            console.log("error:", error);
        };
    }
    ;
    cheeckIfCartExist() {
        var that = this;
        setTimeout(function () {
            if (that.message_cart == 'cart exist') {
                that.resume_shopping = false;
                that.message_title = 'Continue shopping!!!';
            }
            ;
            if (that.message_cart == 'create-cart-successfully') {
                that.start_shopping = false;
                that.message_title = 'Welcome back!!!';
            }
            ;
        }, 1000);
    }
    ;
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-circle {\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    padding: 0;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .btn-circle i {\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n  \r\n  .btn-circle-sm {\r\n    width: 25px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 0.9rem;\r\n  }\r\n  \r\n  ng-sidebar-container{\r\n    height: 170vh;  \r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1jaXJjbGUgaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tY2lyY2xlLXNtIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcblxyXG4gIG5nLXNpZGViYXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxNzB2aDsgIFxyXG59IFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainComponent = class MainComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this._opened = true;
        this.title = 'sidebar';
    }
    ngOnInit() {
        this.data.token_as.subscribe((str) => this.token = str);
        if (this.token == '') {
            this.router.navigate(['/firstpage']);
        }
    }
    _toggleSidebar() {
        this._opened = !this._opened;
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/mark.pipe.ts":
/*!******************************!*\
  !*** ./src/app/mark.pipe.ts ***!
  \******************************/
/*! exports provided: MarkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkPipe", function() { return MarkPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");



let MarkPipe = class MarkPipe {
    constructor(data) {
        this.data = data;
    }
    transform(values, term) {
        console.log(values);
        if (this.data.orderFun() == true) {
            return values.filter(item => item.name.indexOf(term) !== -1);
        }
        else {
            return values;
        }
    }
};
MarkPipe.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
MarkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mark'
    })
], MarkPipe);



/***/ }),

/***/ "./src/app/menue/menue.component.css":
/*!*******************************************!*\
  !*** ./src/app/menue/menue.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVlL21lbnVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/menue/menue.component.ts":
/*!******************************************!*\
  !*** ./src/app/menue/menue.component.ts ***!
  \******************************************/
/*! exports provided: MenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenueComponent", function() { return MenueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MenueComponent = class MenueComponent {
    constructor(data, usersData, router) {
        this.data = data;
        this.usersData = usersData;
        this.router = router;
        this.getSearch = [];
    }
    ngOnInit() {
        this.usersData.user_as.subscribe((obj) => this.user = (obj));
        this.data.order_as.subscribe((obj) => this.change_bill = obj);
        this.data.all_product_as.subscribe((obj) => this.all_product = obj);
        this.usersData.changeUser("guest");
        this.data.search_as.subscribe((obj) => this.search_ = obj);
    }
    search() {
        if (this.change_bill == true) {
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
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name.indexOf(this.search_) != -1) {
                console.log(arr[i]);
                this.getSearch.push(arr[i]);
            }
        }
        this.data.changeProduct(this.getSearch);
    }
    ;
    signOut() {
        this.data.cleanUser();
        this.router.navigate(['/firstpage']);
    }
    ;
};
MenueComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MenueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menue/menue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menue.component.css */ "./src/app/menue/menue.component.css")).default]
    })
], MenueComponent);



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-arrow-alt-circle-down{\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtYXJyb3ctYWx0LWNpcmNsZS1kb3due1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);






let OrderComponent = class OrderComponent {
    constructor(data, userdata, router) {
        this.data = data;
        this.userdata = userdata;
        this.router = router;
        this.city = '';
        this.street = '';
        this.date = '';
        this.alert = true;
        this.alert_credit = true;
        this.object = {
            city: '',
            street: '',
            date: '',
            credit_card: '',
        };
        this.text = 'bill.txt';
    }
    ngOnInit() {
        this.data.token_as.subscribe((str) => this.token = str);
        if (this.token == '') {
            this.router.navigate(['/firstpage']);
        }
        ;
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
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__();
        let row = 15;
        this.produc_cart.map((obj, indx) => {
            doc.text('product:' + obj.name + 'count:' + JSON.stringify(obj.count) + 'price:' + JSON.stringify(obj.price), 15, row);
            row = row + 10;
        });
        doc.text('total:' + this.total, 15, row);
        doc.save('pdf.pdf');
    }
    ;
    dblclick(atr) {
        if (atr == "date") {
            this.object[atr] = (new Date()).toISOString().split('T')[0];
            this[atr] = this.object[atr];
            this.validDate();
        }
        this[atr] = this.object[atr];
    }
    ;
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
        });
    }
    ;
    order() {
        if (!this.alert) {
            alert('wrong!');
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
            };
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
        this.data.changeusername('guest');
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
        }
        else if (mastercardRegEx.test(this.credit_card)) {
            isValid = true;
        }
        else if (amexpRegEx.test(this.credit_card)) {
            isValid = true;
        }
        else if (discovRegEx.test(this.credit_card)) {
            isValid = true;
        }
        if (isValid) {
            alert("Thank You!");
            return true;
        }
        else {
            alert("somthing wronge!!!");
            return false;
        }
    }
    alertCredit() {
        this.alert_credit = true;
    }
};
OrderComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-circle {\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    padding: 0;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .btn-circle i {\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n  \r\n  .btn-circle-sm {\r\n    width: 25px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 0.9rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWNpcmNsZSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTFweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1jaXJjbGUtc20ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");





let ProductComponent = class ProductComponent {
    constructor(data, router, spinner) {
        this.data = data;
        this.router = router;
        this.spinner = spinner;
        this.product = [];
        this.alert = true;
        this.product_Col = 'col-md-10';
        this.sidebar = 'col-md-2';
    }
    ngOnInit() {
        this.data.product_as.subscribe((obj) => this.product = obj);
        this.data.cart_as.subscribe((obj) => this.cart = obj);
        this.data.token_as.subscribe((obj) => this.token = obj);
    }
    addProductInCart(obj) {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 800);
        if (obj.count < 1) {
            this.alert = false;
            var that = this;
            setTimeout(function () {
                that.alert = true;
            }, 3000);
            return;
        }
        let object = {
            id_product: obj.id,
            count: obj.count,
            price: obj.price,
            id_cart: this.cart[0].id
        };
        this.data.add_Product_cart(object);
        obj.count = 0;
        obj.add = true;
    }
    plus(obj) {
        obj.count = obj.count + 1;
        if (obj.count != 0) {
            obj.add = false;
        }
    }
    minus(obj) {
        if (obj.count != 0) {
            obj.count = obj.count - 1;
        }
        if (obj.count == 0) {
            obj.add = true;
        }
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(usersData, data, router) {
        this.usersData = usersData;
        this.data = data;
        this.router = router;
        this.step_1 = false;
        this.step_2 = true;
        this.alert = true;
        this.alert_message = '';
        this.button = 'Next';
    }
    ngOnInit() {
    }
    click() {
        if (this.id.length != 9 || this.id == null || this.id == undefined) {
            this.alert_message += 'id Must only be 9 digits long!!!  ';
        }
        if (this.email == null || this.email == undefined || this.email == '') {
            this.alert_message += 'email must be ok!!!  ';
        }
        ;
        if (this.password.length < 4) {
            this.alert_message += 'Password length must be 4 characters!!!   ';
        }
        ;
        if (this.password != this.passwordConfirm) {
            this.alert_message += 'The password does not match!!!  ';
        }
        ;
        if (this.alert_message != '') {
            this.alert = false;
            let that = this;
            setTimeout(() => {
                that.alert = true;
                that.alert_message = '';
            }, 5000);
            return;
        }
        ;
        if (!this.step_1) {
            this.step_1 = true;
            this.step_2 = false;
            this.button = 'SUBMIT';
            return;
        }
        if (this.city == null || this.city == undefined || this.city == '') {
            this.alert_message += 'city must bee exist!!!  ';
        }
        ;
        if (this.street == null || this.street == undefined || this.street == '') {
            this.alert_message += 'street must bee exist!!!  ';
        }
        ;
        if (this.name == null || this.name == undefined || this.name == '') {
            this.alert_message += 'name must bee exist!!!  ';
        }
        ;
        if (this.last_name == null || this.last_name == undefined || this.last_name == '') {
            this.alert_message += 'Last Name must bee exist!!!  ';
        }
        ;
        if (this.alert_message != '') {
            this.alert = false;
            let that = this;
            setTimeout(() => {
                that.alert = true;
                that.alert_message = '';
            }, 5000);
            return;
        }
        ;
        let object = {
            id: this.id,
            email: this.email,
            password: this.password,
            city: this.city,
            street: this.street,
            name: this.name,
            last_name: this.last_name
        };
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
        });
    }
    back() {
        if (!this.step_1) {
            this.step_1 = true;
            this.step_2 = false;
            this.button = 'SUBMIT';
            return;
        }
        else {
            this.step_1 = !true;
            this.step_2 = !false;
            this.button = 'Next';
        }
    }
    ;
};
RegisterComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/services/users.service.ts");





let ProductService = class ProductService {
    constructor(router, userData) {
        this.router = router;
        this.userData = userData;
        /////////////////////jwt///////////////////////////////////////////////////////
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.token_as = this.token.asObservable();
        /////////////////////category////////////////////////////////////////////////////
        this.category = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.category_as = this.category.asObservable();
        ////////////////////product/////////////////////////////////////////////
        this.all_product = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.all_product_as = this.all_product.asObservable();
        this.search_product = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.search_product_as = this.search_product.asObservable();
        /////////////////////get product by category///////////////////////////////
        /*change to 'get' and send param*/
        this.product = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.product_as = this.product.asObservable();
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////cart////////////////////////////////////////////////////////////
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.cart_as = this.cart.asObservable();
        //////////////////////message of cart /////////////////////////////////////////////////////////////////////
        this.message_cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.message_cart_as = this.message_cart.asObservable();
        ////////////////////products cart///////////////////////////////////////////////////////
        this.product_cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.product_cart_as = this.product_cart.asObservable();
        //////////////////total////////////////////////////
        this.total = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.total_as = this.total.asObservable();
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////order//////////////////////////////////
        this.order = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.order_as = this.order.asObservable();
        this.back = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.back_as = this.back.asObservable();
        ////////////////////////Validation on a date///////////////////////////////////////
        this.orders_data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.orders_data_as = this.orders_data.asObservable();
        ////////////////////Modall/////////////////////
        this.show_modall = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.show_modall_as = this.show_modall.asObservable();
        this.message_modall = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.message_modall_as = this.message_modall.asObservable();
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.search_as = this.search.asObservable();
        // };
        //////////////////////////////////////////////////////
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.message_as = this.message.asObservable();
        // ///////////////////////////////////////
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('guest');
        this.username_as = this.username.asObservable();
        /////////////////////////////////////////////////////////////////////
        this.admin_product = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ name: '', price: 0, img: '', id_category: 0, id: 0 });
        this.admin_product_as = this.admin_product.asObservable();
        this.message_title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.message_title_as = this.message_title.asObservable();
        this.resume_shopping = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.resume_shopping_as = this.resume_shopping.asObservable();
        this.start_shopping = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.start_shopping_as = this.start_shopping.asObservable();
        this.create_date = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.create_date_as = this.create_date.asObservable();
        this.last_order = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.last_order_as = this.last_order.asObservable();
    }
    setToken(obj) {
        this.token.next(obj);
    }
    ;
    currentCategory(jwt) {
        fetch(`http://localhost:3000/product/category/:token?token=${jwt}`)
            .then((res) => res.json())
            .then((res) => {
            this.category.next(res.data);
            console.log(res.data);
        }), (error) => {
            console.log("error:", error);
        };
    }
    get_all_product() {
        console.log(this.token.value);
        fetch(`http://localhost:3000/product/get_all_product/:token?token=${this.token.value}`)
            .then((res) => res.json())
            .then((res) => {
            res.data.map((obj) => {
                obj.count = 0;
                obj.add = true;
            });
            this.all_product.next(res.data);
        }), (error) => {
            console.log("error:", error);
        };
    }
    current_product(product) {
        this.search_product.next(product);
        console.log(this.search_product.value);
    }
    ;
    currentProduct(id_category) {
        fetch(`http://localhost:3000/product/get_product/:id_category?id_category=${id_category}&token=${this.token.value}`)
            .then((res) => res.json())
            .then((res) => {
            res.data.map((obj) => {
                obj.count = 0;
                obj.add = true;
            });
            this.product.next(res.data);
        }), (error) => {
            console.log("error:", error);
        };
    }
    changeProduct(product) {
        this.product.next(product);
    }
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
            this.get_product_cart();
        }), (error) => {
            console.log("error:", error);
        };
    }
    messageChange(message) {
        this.message_cart.next(message);
        console.log(this.message_cart.value);
    }
    get_product_cart() {
        fetch(`http://localhost:3000/product/item/:id_cart?id_cart=${this.cart.value[0].id}&token=${this.token.value}`)
            .then((res) => res.json())
            .then((res) => {
            this.product_cart.next(res.data);
            this.total_count();
        }), (error) => {
            console.log("error:", error);
        };
    }
    //////////////////////add product//////////////////////////
    add_Product_cart(object) {
        let obj = {
            id_product: object.id_product,
            count: object.count,
            price: object.price,
            id_cart: object.id_cart,
            token: this.token.value
        };
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
        };
    }
    ///////////////////delete////////////////////////////
    deleteItemCart(id_product) {
        let obj = {
            id_product: id_product,
            token: this.token.value
        };
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
        };
    }
    /////////////////delete all////////////////////////////// 
    deleteAllItemCart() {
        let obj = {
            id_cart: this.cart.value[0].id,
            token: this.token.value
        };
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
        };
    }
    total_count() {
        let total_global = 0;
        this.product_cart.value.map((obj) => {
            let count = obj.count * obj.price;
            total_global = total_global + count;
        });
        this.total.next(total_global);
    }
    changeOrder(bool) {
        this.order.next(bool);
    }
    ;
    changeback(bool) {
        this.back.next(bool);
    }
    ;
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
        };
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
                };
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
                };
                // this.router.navigate(['/firstpage'])
            }
            ;
        }), (error) => {
            console.log("error:", error);
            this.setMessageModall("error:" + error);
        };
    }
    ;
    cleanUser() {
        this.token.next('');
        this.userData.changeUser({});
        this.product.next([]);
        this.message_title.next('');
        this.resume_shopping.next(true);
        this.start_shopping.next(true);
        this.changeusername('guest');
    }
    getDataOrder() {
        fetch(`http://localhost:3000/product/order_date/:token?token=${this.token.value}`)
            .then((res) => res.json())
            .then((res) => {
            this.orders_data.next(res.data);
            console.log(res);
        });
    }
    ;
    setShowModall(bool_) {
        this.show_modall.next(bool_);
    }
    ;
    setMessageModall(msg) {
        this.message_modall.next(msg);
    }
    ;
    ///////////////////if order page is true pipe...////////////////////////////////////// 
    orderFun() {
        if (this.order.value == true) {
            return true;
        }
        else {
            return false;
        }
    }
    ;
    changeSearch(obj) {
        this.search.next(obj);
    }
    ;
    changeusername(username) {
        this.username.next(username);
    }
    ;
    adminProductchange(obj) {
        this.admin_product.next(obj);
    }
    ;
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
            };
        }
        else {
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
            };
        }
        ;
    }
    ;
    cheeckIfCartExist() {
        var that = this;
        setTimeout(function () {
            if (that.message_cart.value == 'cart exist') {
                that.resume_shopping.next(false);
                that.message_title.next('There is an active cart!!!');
                that.create_date.next(that.cart.value[0].create_date);
            }
            ;
            if (that.message_cart.value == 'create-cart-successfully') {
                that.getLastOrder();
                that.start_shopping.next(false);
                that.message_title.next('Welcome back!!!');
            }
            ;
        }, 1000);
    }
    ;
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
            }
            else {
                this.last_order.next(last_order);
                this.message_title.next('Welcome back!!!');
            }
        }), (error) => {
            console.log("error:", error);
        };
    }
    ;
};
ProductService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let UsersService = class UsersService {
    constructor() {
        this.id_user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.id_user_as = this.id_user.asObservable();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.user_as = this.user.asObservable();
    }
    changeIdUser(obj) {
        this.id_user.next(obj);
    }
    changeUser(obj) {
        if (obj.username) {
            this.user.next(obj);
            console.log(this.user.value);
            return;
        }
        this.user.next({ username: 'guest' });
    }
};
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\project_angular\Shopping Online\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenueComponent } from './menue/menue.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { TestSidebarComponent } from './test-sidebar/test-sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { ProductComponent } from './product/product.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { MarkPipe } from './mark.pipe';
import { APIDocComponent } from './api-doc/api-doc.component';
import { ImgPipe } from './img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenueComponent,
    LoginComponent,
    MainComponent,
    CategoryComponent,
    CartComponent,
    TestSidebarComponent,
    ProductComponent,
    FirstPageComponent,
    RegisterComponent,
    OrderComponent,
    AdminComponent,
    MarkPipe,
    APIDocComponent,
    ImgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

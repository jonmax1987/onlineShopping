import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { APIDocComponent } from './api-doc/api-doc.component';


 
const routes: Routes = [ 
 
  {path:  'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path:'firstpage', component: FirstPageComponent},
  {path:'register',component: RegisterComponent},
  {path:'order',component: OrderComponent},
  {path:'admin',component: AdminComponent},
  {path:'api',component: APIDocComponent},
  { path: '', redirectTo: '/firstpage', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

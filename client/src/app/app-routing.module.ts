import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TestSidebarComponent } from './test-sidebar/test-sidebar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [ 
 
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path:'sidebar', component: TestSidebarComponent},
  {path:'firstpage', component: FirstPageComponent},
  {path:'register',component: RegisterComponent},
  {path:'order',component: OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

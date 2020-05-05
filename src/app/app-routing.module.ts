import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerLoginComponent } from './sellerLogin/seller-login.component';
import { AddModelComponent } from './add-model/add-model.component';
import { HeaderComponent } from './header/header.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ManagePasswordComponent } from './manage-password/manage-password.component';
import { ManagesellerComponent } from './manageseller/manageseller.component';
import { BrowseComponent } from './browse/browse.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { RenderComponent } from './render/render.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sellerRegister',component:SellerRegisterComponent},
  { path: 'sellerLogin',component:SellerLoginComponent},
  { path: 'addmodel',component:AddModelComponent},
  { path: 'header',component:HeaderComponent},
  { path: 'sellerDashboard',component:SellerDashboardComponent},
  { path: 'footer',component : FooterComponent},
  { path: 'managePassword',component : ManagePasswordComponent},
  { path: 'manageseller',component :ManagesellerComponent},
  { path: 'browse',component:BrowseComponent},
  { path: 'userdashboard',component:UserdashboardComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'home',component:HomeComponent},
  { path: 'render',component:RenderComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

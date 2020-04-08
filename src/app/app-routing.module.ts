import { NgModule } from '@angular/core';
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
  { path: 'browse',component:BrowseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

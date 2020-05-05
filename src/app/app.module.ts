import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddModelComponent } from './add-model/add-model.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerLoginComponent } from './sellerLogin/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { FooterComponent } from './footer/footer.component';
import { ManagePasswordComponent } from './manage-password/manage-password.component';
import { ManagesellerComponent } from './manageseller/manageseller.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { ManagemodelComponent } from './managemodel/managemodel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { RenderComponent } from './render/render.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddModelComponent,
    SellerDashboardComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    HeaderComponent,
    BrowseComponent,
    FooterComponent,
    ManagePasswordComponent,
    ManagesellerComponent,
    UserdashboardComponent,
    PaymentComponent,
    ManagemodelComponent,
    HomeComponent,
    CartComponent,
    RenderComponent,
    ProductdetailsComponent,
    AdminDashComponent,
    ManageuserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    FontAwesomeModule,
    SweetAlert2Module,
    MatCardModule,
    NgbModule,
    NgxStarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

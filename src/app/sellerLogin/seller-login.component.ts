import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {
loginform;
  constructor(private fb: FormBuilder, private sellerservice:SellerService,private  router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginform = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  loginSubmit(formdata){
    this.sellerservice.getsellerByemail(formdata.email).subscribe(userobj=>{
      let logged_user = userobj;
      if(logged_user){
        if(logged_user['password'] == formdata['password']){
          //add user detail to sessionstorage
          sessionStorage.setItem('user',JSON.stringify(logged_user));
          sessionStorage.setItem('admin',JSON.stringify(true));
          
            this.router.navigate(['/sellerDashboard'])
            return;
        }else{
          Swal.fire({
            icon :'error',
            title : 'oops!',
            text:'your username or password is incorrect',
          })
        }
      }else{
       Swal.fire({
         icon :'error',
         title : 'oops!',
         text:'your username or password is incorrect',
      })
      }
     });
   
     console.log(formdata);
   }
  getControl(){
    return this.loginform.controls;
  }

}



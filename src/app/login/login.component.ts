import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginform = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  loginSubmit(formdata){
   this.userService.getByUsername(formdata.username).subscribe(userobj=>{
     let logged_user = userobj;
     if(logged_user){
       if(logged_user['password'] == formdata['password']){
         //add user detail to sessionstorage
         sessionStorage.setItem('user',JSON.stringify(logged_user));
         sessionStorage.setItem('admin',JSON.stringify(true));
         if(logged_user['admin']){
           //navigate to admin dashboard
           this.router.navigate(['/admin'])
           return;
         }else{
           this.router.navigate(['/home'])
           return;
         }
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

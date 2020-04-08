import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform;
  
  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userform = this.fb.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      confirm : ['', Validators.required],
    }, {validators : this.matchPassword('password', 'confirm')})
  }

  matchPassword(password,confirm_pass)
    {
      return (form)=> 
      {
        let passControl=form.controls[password];
        let confirmControl=form.controls[confirm_pass];
        if(passControl.value !==confirmControl.value)
        {
          confirmControl.setErrors({match:true})
        }
     }
   }

  userSubmit(formdata){

    if(this.userform.invalid){
      // alert('incorrect data')

      return;
    }

    this.userservice.addUser(formdata).subscribe(data => {
      console.log(data);
    })
  }

  getControl(){
    return this.userform.controls;
  }

}

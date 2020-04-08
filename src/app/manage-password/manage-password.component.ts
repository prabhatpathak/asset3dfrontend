import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-manage-password',
  templateUrl: './manage-password.component.html',
  styleUrls: ['./manage-password.component.css']
})
export class ManagePasswordComponent implements OnInit {
otp;
  constructor(private mailService: MailService) { }

  ngOnInit(): void {
  }
sendOtp(email){
this.otp = Math.floor(1000+Math.random()*9000);
this.mailService.sendMail({from:'prabhatpathak9076@gmail.com',to:email,message:`your Otp for resetting password is ${this.otp}`})
.subscribe((data)=>{
  console.log(data);
  console.log(this.otp)
})
}
}

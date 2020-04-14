import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  user;
  showaddmodel = false;
  showmanagemodel = false;
  showmanageprofile = false;

  constructor() { }

  ngOnInit(): void {

    this.user = JSON.parse(sessionStorage.getItem('user'));
    document.body.classList.add("bg-user-d")
    
  }
  ngOnDestroy(): void {
    document.body.classList.remove("bg-user-d")
  }

  
  togglemanageprofile(){
    this.showmanageprofile = true;
    this.showaddmodel = false;
    this.showmanagemodel = false;
  }



}

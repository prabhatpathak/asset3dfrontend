import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  admin;
  seller;
  showmanageuser = false;
  showmanageseller = false;

  constructor() { }

  ngOnInit(): void {
    this.admin = JSON.parse(sessionStorage.getItem("user"))
  }

  togglemanageuser(){
    this.showmanageuser = true;
    this.showmanageseller = false;
  }

  togglemanageseller(){
    this.showmanageuser = false;
    this.showmanageseller = true;
  }
}
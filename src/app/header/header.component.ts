import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin = false;

  constructor(private userservice : UserService) { }

  ngOnInit(): void { 
    let user = JSON.parse(sessionStorage.getItem('user'))
  if(user){
    this.loggedin = true;
  }}
  logout()
  {
    this.userservice.logout();

  }

}

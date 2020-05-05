import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {

  users;

  constructor(private userservice : UserService) { }

  ngOnInit(): void {

this.userservice.getallusers().subscribe((data)=>{

this.users = data;
console.log(data);

})
  }

}
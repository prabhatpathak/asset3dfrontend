import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient, private router : Router) { }

  addUser(data){
    return this.http.post(this.url+'/add', data);
  }

  getByUsername(username){
    return this.http.get(this.url+`/getbyusername/${username}`);
  }
  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('admin');
    this.router.navigate(['/login']);
  }
  }
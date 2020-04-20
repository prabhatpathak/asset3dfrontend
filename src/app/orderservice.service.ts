import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  url ='http://localhost:3000/order'

  constructor(private http: HttpClient) { }


  addOrder(formdata){
    return this.http.post(this.url+'/add',formdata);
  }
}

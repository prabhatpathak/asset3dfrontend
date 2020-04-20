import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url = 'http://localhost:3000/product'

  constructor(private http: HttpClient) { }
  addProduct(data){
    return this.http.post(this.url+'/add', data);

  }
  getProductById(id){
    return this.http.get(this.url+`/getbyid/${id}`);
  }

  uploadImage(file): Observable<any> {
    return this.http.post(this.url + '/addimg', file)
  }

  getAllproducts(){
    return this.http.get(this.url+'/getall');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url = 'http://localhost:3000/seller';


  constructor(
    private http: HttpClient
  ) { }
  addseller(data){
    return this.http.post(this.url+'/add', data);
  }
  getsellerByemail(
    email
  )
  {
    return this.http.get(this.url+'/getbyemail/'+email);
}
 uploadImage(file): Observable<any>
{
return this.http.post(this.url+'/addimg',file)
}
}




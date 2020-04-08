import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  url = 'http://localhost:3000/util'

  constructor(private http: HttpClient) { }
  sendMail(formdata){
    return this.http.post(this.url+'/sendmail',formdata);

  }
}

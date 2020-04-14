import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  sellerform;
  seller;
  showaddmodel = false;
  showmanagemodel = false;
  showmanageprofile = false;

  constructor(private fb: FormBuilder, private sellerservice: SellerService) { }

  ngOnInit(): void {
    

    this.seller = JSON.parse(sessionStorage.getItem('user'));
    this.initForm();
    document.body.classList.add("bg-sell-d")
    
  }
  initForm(){
    this.sellerform = this.fb.group(this.seller);
    }


  ngOnDestroy(): void {
    document.body.classList.remove("bg-sell-d")
  }

  
  togglemanageprofile(){
    this.showmanageprofile = true;
    this.showaddmodel = false;
    this.showmanagemodel = false;
  
  }
  toggleaddmodel(){
    this.showmanageprofile = false;
    this.showaddmodel = true;
    this.showmanagemodel = false;
  
  }
  togglemanagemodel(){
    this.showmanageprofile = false;
    this.showaddmodel = false;
    this.showmanagemodel = true;
  
  }
  sellerSubmit(formdata){

    if(this.sellerform.invalid){
      // alert('incorrect data')

      return;
    }

    this.sellerservice.updateseller(this.seller._id, formdata).subscribe(data => {
      console.log(data);
      sessionStorage.setItem("user",JSON.stringify(data))
      this.seller=data
    })
  }

  getControl(){
    return this.sellerform.controls;
  }

}

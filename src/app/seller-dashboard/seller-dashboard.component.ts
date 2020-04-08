import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  seller;
  showaddmodel = false;
  showmanagemodel = false;
  showmanageprofile = false;

  constructor() { }

  ngOnInit(): void {

    this.seller = JSON.parse(sessionStorage.getItem('user'));
    document.body.classList.add("bg-sell-d")
    
  }
  ngOnDestroy(): void {
    document.body.classList.remove("bg-sell-d")
  }

  
  togglemanageprofile(){
    this.showmanageprofile = true;
    this.showaddmodel = false;
    this.showmanagemodel = false;
  }



}

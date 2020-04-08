import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-manageseller',
  templateUrl: './manageseller.component.html',
  styleUrls: ['./manageseller.component.css']
})
export class ManagesellerComponent implements OnInit {

  sellerform;
  constructor(private fb: FormBuilder, private sellerservice: SellerService) { }
  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.sellerform = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      contact : ['', Validators.required],
      password : ['', Validators.required],
      confirm : ['', Validators.required]
    });
  }

    sellerSubmit(formdata){

      if(this.sellerform.invalid){
        // alert('incorrect data')
  
        return;
      }
  
      this.sellerservice.addseller(formdata).subscribe(data => {
        console.log(data);
      })
    }
  
    getControl(){
      return this.sellerform.controls;
    }
  }

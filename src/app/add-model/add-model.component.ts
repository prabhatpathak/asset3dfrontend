import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  modelform;
  currentuser;
    constructor( private fb:FormBuilder, private productservice : ProductService) { }
    ngOnInit(): void {
      this.currentuser= JSON.parse(sessionStorage.getItem('user'));
      this.initForm();
    }
  
    initForm(){
      this.modelform = this.fb.group({
        seller : this.currentuser._id,
        name : ['', Validators.required],
        price : ['', Validators.required],
        compatibility : [ [], Validators.required],
        image_formats : ['', Validators.required],
        size : ['', Validators.required],
        geometry :['',Validators.required],
        vertices : ['',Validators.required],
        textures :['',Validators.required],
        
      })
    }
  
    formSubmit(formdata){
      if(this.modelform.invalid){
        Swal.fire(
          'Error|',
          'fill complete information|',
          'error'
        )
        return;
        }
        this.productservice.addProduct(formdata).subscribe(data => {
          console.log(data);
        })
    
      }
    
      getControl(){
        return this.modelform.controls}}
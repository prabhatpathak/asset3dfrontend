import { Component, OnInit } from '@angular/core'; 
import { from } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { SellerService } from '../seller.service';
import Swal from 'sweetalert2'
import {faLock} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent implements OnInit {
sellerform;
     imgURL: string | ArrayBuffer;
     imagePath:any;
     message:string;
     sellerService:any;
     selectedFiles:any;
     avatarName:any;
     lock=faLock;
    

  constructor(private fb: FormBuilder, private sellerservice: SellerService) { }
  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.sellerform = this.fb.group({
      name : ['', Validators.required],
      username:['',Validators.required],
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
      formdata.avatar=this.avatarName
      this.sellerservice.addseller(formdata).subscribe(data => {
        console.log(data);
      })
    }
  
    getControl(){
      return this.sellerform.controls;
    }
  
  uploadImage(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;
 
    var mimeType=files[0].type;
    if(mimeType.match(/image\/*/)==null)
    { 
      Swal.fire("Images Only");
      return;
    }
    this.preview(event.target.files)
    let formData=new FormData();
    this.selectedFiles=files[0];
    this.avatarName=this.selectedFiles.name;
    console.log(this.avatarName);
    formData.append('image', this.selectedFiles, this.selectedFiles.name);
    this.sellerservice.uploadImage(formData).subscribe(response=>
{
      console.log(response.message)
      })
  }
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }}
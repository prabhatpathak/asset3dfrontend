import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product;
  reviewForm;
  currentUser;
  reviews;
  newreview = true;
  constructor(private productservice : ProductService, private activated : ActivatedRoute,
    private formbuilder : FormBuilder) { }

  ngOnInit() {

    let id = this.activated.snapshot.paramMap.get('id');

    this.productservice.getProductById(id).subscribe(data => {
      this.currentUser = JSON.parse(sessionStorage.getItem('user'));
      console.log(data);
      this.product = data;
      this.getReviews();
      this.getUserReview();
    })
  }

  addReview(formdata){
    if(this.newreview){
      this.productservice.addReview(formdata).subscribe(data => {
        console.log(data);
        // this.product.reviews.push(data['_id']);
        // this.updateProduct(this.product._id, this.product);
        this.refreshProduct();
      })
    }
  }

  refreshProduct(){
    this.productservice.getProductById(this.product._id).subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }

  getReviews(){
    this.productservice.getAllReviews(this.product._id).subscribe(data => {
      this.reviews = data;
      console.log(data);
    })
  }

  getUserReview(){
    this.productservice.getUserReview(this.currentUser._id).subscribe(data => {
      console.log(data);
      if(data)
        this.newreview = false;
      this.initForm(data);
    })
  }

  initForm(review){
    if(review){
      this.reviewForm = this.formbuilder.group(review);
      return;
    }
    this.reviewForm = this.formbuilder.group({
      user : this.currentUser._id,
      product : this.product._id,
      rating : 2,
      review : ''
    })
  }

}
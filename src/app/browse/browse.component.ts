import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
products;
  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
  this.productservice.getallproducts().subscribe(data => {
    console.log(data);
    this.products=data;
  })
  }
}
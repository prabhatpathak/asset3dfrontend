import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-managemodel',
  templateUrl: './managemodel.component.html',
  styleUrls: ['./managemodel.component.css']
})
export class ManagemodelComponent implements OnInit {
models;
  constructor(private productservice : ProductService) { }

  ngOnInit(): void {

this.productservice.getAllproducts().subscribe((data)=>{

this.models = data;
console.log(data);

})
  }

}
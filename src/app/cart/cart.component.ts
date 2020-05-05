import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum=0;

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }
  addquantity(index){
    this.cartservice.cartItems[index].quantity++
    this.calculateTotal();
    }
    removequantity(index){
    let cartitems=this.cartservice.cartItems;
    if(cartitems[index].quantity>1){
    cartitems[index].quantity--
    }
    else{
    cartitems.splice(index,1);
    console.log(cartitems);
    }
    
    this.cartservice.cartItems=cartitems;
    
    }
calculateTotal(){
  for(let item of this.cartservice.cartItems)
  {
    this.sum+=item.data.price
  }

}

}
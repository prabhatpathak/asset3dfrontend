import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems;
 
 constructor() {
 this.cartItems = JSON.parse(localStorage.getItem("cart"))
 if(!this.cartItems){
 this.cartItems = [];
 }
 }
 
additem(item){
 this.cartItems.push(item);
 this.savecart();
 
}
 
savecart(){
 localStorage.setItem("cart", JSON.stringify(this.cartItems))
}
 
removeitem(item){
 this.cartItems.slice(item);
 
}
 
emptycart(){
 this.cartItems= [];
 this.savecart();
 
}
 
getcartitems(){
 return this.cartItems;
 
}
 
}
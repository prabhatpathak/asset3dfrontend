import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { OrderserviceService } from '../orderservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
 
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  amount;
  user;
 order;
  constructor(private orderservice: OrderserviceService, private router: Router,
    private cd: ChangeDetectorRef, private http: HttpClient) { }
 
  ngOnInit() {
    console.log(`to pay ${this.amount}`)
    this.user = JSON.parse(sessionStorage.getItem('user')); 
    // this.loadStripe();
  }
 
  ngAfterViewInit() {
 
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
 
    this.card = elements.create('card', {style});
    this.card.mount(this.cardInfo.nativeElement);
 
    this.card.addEventListener('change', this.cardHandler);
  }
 
  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
 
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
  
  completePayment(secret, obj){
    const that = obj
    stripe.confirmCardPayment(secret, {
      payment_method: {
        card: this.card,
        billing_details: {
          name: 'Leon S Kennedy'
        }
      }
    }).then(function(result) {
      if (result.error) {
        
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          console.log('success');
          that.addOrder();
          // console.log(card);
        }
      }
    });
  }
 
  addOrder(){
    this.orderservice.addOrder(this.order).subscribe((message)=>
          {
            console.log(message); 
            this.router.navigate(['/userdashboard'])
            Swal.fire({
              icon: 'success',
              title: 'Booking Requested',
              text: 'You will be informed once the booking is confirmed from the host end!'
            })
          })
  }
 
  getIntent(){
    this.http.post('http://localhost:3000/create-payment-intent', {amount : 100 * 100}).subscribe(data => {
      console.log(data);
       this.completePayment(data['client_secret'], this);
      console.log(this.card);
    });
  }}
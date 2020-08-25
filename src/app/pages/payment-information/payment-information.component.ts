import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit, AfterViewInit {

  public cardNumber: string;
  public cardHoldersName: string;
  public expiry: string;
  public cvc: string;
  public cardType: string;
  public cardTypeImgUrl: string;

  @ViewChild('cardInfo') cardInfo: ElementRef;
  
  stripe; // : stripe.Stripe;
	cardErrors;
  paymentToken: string;
  card: any;

  constructor() { }

  ngOnInit() {
    this.cardTypeImgUrl = 'https://image.ibb.co/cZeFjx/little_square.png';
  }

  ngAfterViewInit(): void {
		this.stripe = Stripe(environment.stripeKey);
		const elements = this.stripe.elements();

		this.card = elements.create('card',{
      hidePostalCode: true});
      
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
			this.cardErrors = error && error.message;
    });
  }
  
  async addCard() {
    
  }

}

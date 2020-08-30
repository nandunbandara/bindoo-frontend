import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentService } from 'src/app/services/payment.service';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/helpers/api-response';

declare const Stripe;

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

  user;

  constructor(
    private paymentService: PaymentService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.cardTypeImgUrl = 'https://image.ibb.co/cZeFjx/little_square.png';
    this.authService.getCurrentUser().subscribe(user => this.user = user);
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
  
  async addPaymentMethod() {
    this.paymentService.createCustomerWithoutToken(this.user.uid, this.user.email).subscribe((customerResponse: APIResponse) => {

        this.paymentService.getSetupIntentClientSecret().subscribe(async (clientSecretResponse: APIResponse) => {
          const result = await this.stripe.handleCardSetup(
            
          )
        })
    });
  }

}

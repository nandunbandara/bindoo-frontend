import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {

  public cardNumber: string;
  public cardHoldersName: string;
  public expiry: string;
  public cvc: string;

  constructor() { }

  ngOnInit() {
  }

  onUpdateCardNumber() {
    this.cardNumber = this.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  }

}

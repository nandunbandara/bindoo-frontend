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
  public cardType: string;
  public cardTypeImgUrl: string;

  constructor() { }

  ngOnInit() {
    this.cardTypeImgUrl = 'https://image.ibb.co/cZeFjx/little_square.png';
  }

  onUpdateCardNumber() {
    this.cardNumber = this.cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    this.cardType = this.detectCardType(this.cardNumber.replace(' ',''));
    this.cardTypeImgUrl = this.getCardTypeImgUrl(this.cardType);
    console.log(this.cardType);
  }

  getCardTypeImgUrl(type) {
    switch (type) {
      case 'mastercard':
        return '../../../assets/mastercard.png';
      case 'visa':
        return '../../../assets/visa.png';
    }
  }

  detectCardType(cardNumber: string) {
   const re = {
     electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
     maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
     dankort: /^(5019)\d+$/,
     interpayment: /^(636)\d+$/,
     unionpay: /^(62|88)\d+$/,
     visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
     mastercard: /^5[1-5][0-9]{14}$/,
     amex: /^3[47][0-9]{13}$/,
     diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
     discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
     jcb: /^(?:2131|1800|35\d{3})\d{11}$/
   };

   for (const key in re) {
    if (re[key].test(cardNumber)) {
      return key;
    }
  }
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  public createCustomerWithoutToken(uid: string, email: string) {
    return this.http.post(`${environment.apihost}/customers`, {uid, email});
  }

  public getSetupIntentClientSecret() {
    return this.http.get(`${environment.apihost}/client_secret`);
  }

  public attachPaymentIntentToCustomer(customerId: string, paymentMethodId: string) {
    return this.http.put(`${environment.apihost}/customers/payment_method`, {customerId, paymentMethodId });
  }
}

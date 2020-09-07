import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserByUid(uid: string) {
    return this.http.get(`${environment.apihost}/users/${uid}`);
  }

  public updateStripeToken(uid: string, stripeToken: string) {
    return this.http.put(`${environment.apihost}/users/${uid}/stripeToken`, {stripeToken});
  }
}

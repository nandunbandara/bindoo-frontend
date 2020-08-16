import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USER_TYPES = {
    CUSTOMER: 1,
    COUNCIL_MEMBER: 2,
    ADMIN: 3,
    ORGANIZATION_MEMBER: 4,
  };

  constructor(
    public afAuth: AngularFireAuth,
    private http: HttpClient
  ) { }

  public getIdTokenResult() {
    return firebase.auth().currentUser.getIdTokenResult();
  }

  public getUserTypeMapping(type) {


    switch (type) {
      case this.USER_TYPES.ADMIN: 
        return 'Administrator';
      case this.USER_TYPES.CUSTOMER:
        return 'Citizen';
      case this.USER_TYPES.COUNCIL_MEMBER:
        return 'Council Member';
      case this.USER_TYPES.ORGANIZATION_MEMBER:
        return 'Organization';
      default: 
        return 'N/A';
        break;
    }
  }

  public login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    return this.afAuth.auth.signOut();
  }

  public signup(name, email, password) {
    return this.http.post(`${environment.apihost}/users`, { name, email, password, userType: 1 });
  }

  public getCurrentUser() {
    return this.afAuth.authState;
  }

  public verifyEmail(uid: string, token: string) {
    return this.http.put(`${environment.apihost}/users/${uid}/email`, {token});
  }

  public sendVerificationEmail(uid: string,) {
    return this.http.post(`${environment.apihost}/users/${uid}/email`, {});
  }

}

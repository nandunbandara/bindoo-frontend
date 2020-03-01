import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private http: HttpClient
  ) { }

  public login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    return this.afAuth.auth.signOut();
  }

  public signup(name, email, password) {
    return this.http.post(`${environment.apihost}/users`, { name, email, password, userType: 1 });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BinsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllBinsByUser(uid: string) {
    return this.http.get(`${environment.apihost}/users/${uid}/bins`);
  }
}

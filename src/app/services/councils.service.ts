import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouncilsService {

  constructor(
    private http: HttpClient
  ) { }

  public createNewCouncil(data) {
    return this.http.post(`${environment.apihost}/councils`, data);
  }

  public getCouncils() {
    return this.http.get(`${environment.apihost}/councils`);
  }
}

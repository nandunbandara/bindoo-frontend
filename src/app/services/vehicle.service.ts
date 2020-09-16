import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllVehiclesByCouncil(councilUid: string) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/vehicles`);
  }

  public createVehicle(data) {
    return this.http.post(`${environment.apihost}/vehicles`, data);
  }
}

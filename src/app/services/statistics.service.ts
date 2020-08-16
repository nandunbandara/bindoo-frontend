import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private http: HttpClient
  ) { }

  getOrganizationCount() {
    return this.http.get(`${environment.apihost}/organizations/count`);
  }

  getLocations() {
    return this.http.get(`${environment.apihost}/locations/count`);
  }

  getLocationsByCouncil(councilId: string) {
    return this.http.get(`${environment.apihost}/councils/${councilId}/count`);
  }

  getPVLocationCount() {
    return this.http.get(`${environment.apihost}/locations/status/count`);
  }

  getVehicleCount() {
    return this.http.get(`${environment.apihost}/vehicles/count`);
  }
}

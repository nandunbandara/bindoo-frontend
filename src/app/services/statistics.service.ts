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

  getLocationsCountByUser(uid: string) {
    return this.http.get(`${environment.apihost}/users/${uid}/locations/count`);
  }

  getLocationsByCouncil(councilId: string) {
    return this.http.get(`${environment.apihost}/councils/${councilId}/locations/count`);
  }

  getPVLocationCount() {
    return this.http.get(`${environment.apihost}/locations/status/count`);
  }

  getVehicleCount() {
    return this.http.get(`${environment.apihost}/vehicles/count`);
  }

  getBinCountByUser(uid: string) {
    return this.http.get(`${environment.apihost}/users/${uid}/bins/count`);
  }
}

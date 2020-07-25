import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  getAllLocations() {
    return this.http.get(`${environment.apihost}/locations`);
  }

  getLocationsByUser(uid: string) {
    return this.http.get(`${environment.apihost}/users/${uid}/locations`);
  }

  getLocationsByCouncil(councilId: string) {
    return this.http.get(`${environment.apihost}/councils/${councilId}`);
  }

}

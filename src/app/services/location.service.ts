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

  public getAllLocations() {
    return this.http.get(`${environment.apihost}/locations`);
  }

  public getLocationsByUser(uid: string) {
    return this.http.get(`${environment.apihost}/users/${uid}/locations`);
  }

  public getLocationsByUserAndStatus(uid: string, verified: boolean) {
    return this.http.get(`${environment.apihost}/users/${uid}/locations/verified/${verified}`);
  }

  public getLocationsByCouncilAndStatus(councilUid: string, verified: boolean) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/locations/verified/${verified}`);
  }

  public getLocationsByCouncil(councilId: string) {
    return this.http.get(`${environment.apihost}/councils/${councilId}/locations`);
  }

  public createLocation(name: string, description: string, type: number, building_number: string,
                 line_1: string, line_2: string, city: string, uid: string, councilId: string) {
    return this.http.post(`${environment.apihost}/users/${uid}/locations`, {
      name, description, type, building_number, line_1, line_2, city, councilId
    });
  }

  public approveLocation(id: string) {
    return this.http.put(`${environment.apihost}/locations/${id}/verified`, {});
  }

  public suspendLocation(id: string, status) {
    return this.http.put(`${environment.apihost}/locations/${id}/status`, { status });
  }

}

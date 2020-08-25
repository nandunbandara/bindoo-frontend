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

  public createNewBin(locationId: string, name: string, description: string, capacity: number, type = 1) {
    return this.http.post(`${environment.apihost}/locations/${locationId}/bins`, { name, description, capacity, type });
  }

  public markAsReadyForPickup(id: string) {
    return this.http.put(`${environment.apihost}/bins/${id}/readyForCollection`, {});
  }
}

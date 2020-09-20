import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecyclableItemService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllRecyclableItems(status?: string) {
    return this.http.get(`${environment.apihost}/recyclable-items`, { params: { status }});
  }

  public getRecyclableItemsByCouncil(councilUid: string, status?: string) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/recyclable-items`, { params: { status }});
  }

  public getRecyclableItemsByUsers(customerUid: string, status?: string) {
    return this.http.get(`${environment.apihost}/customers/${customerUid}/recyclable-items`, { params: { status }});
  }

  public updateRecyclableItemStatus(id: string, status: string) {
    return this.http.put(`${environment.apihost}/recyclable-items/${id}/status`, { status });
  }
}

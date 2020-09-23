import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllocationsService {

  constructor(
    private http: HttpClient
  ) { }

  public getVehicleAllocationsByCouncil(councilUid: string) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/allocations`);
  }

  public createAllocation(councilUid: string, laneId, vehicleId, amount, pickupListItemId) {
    return this.http.post(`${environment.apihost}/councils/${councilUid}/allocations`, { laneId, vehicleId, amount, pickupListItemId });
  }

  public removeAllocation(id, pickupListItemId) {
    return this.http.delete(`${environment.apihost}/pickuplistItems/${pickupListItemId}/allocations/${id}`);
  }

  public completeAllocation(councilUid, laneId, amount, pickupListItemId, allocationId) {
    return this.http.post(`${environment.apihost}/pickuplistItems/${pickupListItemId}/allocations/${allocationId}/complete`, 
    { councilUid, laneId, amount});
  }

  public getCollections(councilUid) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/collections`);
  }
}

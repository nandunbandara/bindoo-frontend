import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaneService {

  constructor(
    private http: HttpClient
  ) { }

  public getLanesByCouncil(councilUid: string) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/lanes`);
  }

  public createLane(name: string, councilUid: string) {
    return this.http.post(`${environment.apihost}/lanes`, { name, councilUid });
  }
}

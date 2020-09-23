import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PickuplistService {

  constructor(
    private http: HttpClient
  ) { }

  public createPickupList(councilUid: string) {
    return this.http.post(`${environment.apihost}/councils/${councilUid}/pickuplists`, {});
  }

  public getPickupListsByCouncilAndDate(councilUid: string, date) {
    return this.http.get(`${environment.apihost}/councils/${councilUid}/pickuplists/date/${this.formatDate(date)}`);
  }

  public deletePickupList(id) {
    return this.http.delete(`${environment.apihost}/pickuplists/${id}`);
  }

  private formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) { 
        month = '0' + month;
    }
    if (day.length < 2) { 
        day = '0' + day;
    }

    return [year, month, day].join('-');
}
}

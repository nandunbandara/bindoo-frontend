import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  constructor(
    private http: HttpClient
  ) { }

  public getOrganizations() {
    return this.http.get(`${environment.apihost}/organizations`);
  }

  public deleteOrganization(id: string) {
    return this.http.delete(`${environment.apihost}/organizations/${id}`);
  }
}

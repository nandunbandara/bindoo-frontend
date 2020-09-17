import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase/app';
import { MatTableDataSource } from '@angular/material';
import { APIResponse } from 'src/app/helpers/api-response';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.css']
})
export class LocationsViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'verified', 'actions'];

  locations: MatTableDataSource<any>;
  idTokenResult;
  userType;
  councilId;

  constructor(
    private locationService: LocationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    firebase.auth().currentUser.getIdTokenResult().then(idTokenResult => {
      console.log(idTokenResult);
      this.idTokenResult = idTokenResult;
      this.userType = idTokenResult.claims.userType;
      this.councilId = idTokenResult.claims.councilId;
      this.getLocations();
    });
  }

  private getLocations() {
    if (this.userType === 1) {
      this.locationService.getLocationsByUser(firebase.auth().currentUser.uid).subscribe((response: APIResponse) => {
        this.locations = new MatTableDataSource<any>(response.data);
      });
    } else if (this.userType === 2) {
      this.locationService.getLocationsByCouncil(this.councilId).subscribe((response: APIResponse) => {
        this.locations = new MatTableDataSource<any>(response.data);
      });
    } else if (this.userType === 3) {
      this.locationService.getAllLocations().subscribe((response: APIResponse) => {
        this.locations = new MatTableDataSource<any>(response.data);
      });
    }
  }

  public approve(id: string) {
    this.locationService.approveLocation(id).subscribe((response: APIResponse) => {
      this.getLocations();
    });
  }

  public remove(id: string) {
    // this.locationService.
  }

}

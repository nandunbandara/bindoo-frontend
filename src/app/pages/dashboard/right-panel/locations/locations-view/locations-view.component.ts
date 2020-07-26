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

  private data = [
    {
      name: 'Home Sweet Home',
      address: '123, BumbleBee Street, Colombo 2',
      verified: true,
    },
    {
      name: 'My Office',
      address: '45D, Gamunupura Road, Nugegoda',
      verified: false,
    },
    {
      name: 'My Apartment',
      address: '45C/3, Kaitland Street, Colombo 7',
      verified: true,
    },
    {
      name: 'Building 1',
      address: '123, Colombo Street, Kandy',
      verified: false,
    },
    {
      name: 'My Office - Kandy Branch',
      address: '33/4, Dutugemunu Weediya, Kandy',
      verified: false,
    },
    {
      name: 'My Apartment - Kandy',
      address: '3/4C, Awesome Residencies, Katugasthota, Kandy',
      verified: true,
    }
  ];

  constructor(
    private locationService: LocationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // firebase.auth().currentUser.getIdTokenResult().then(idTokenResult => {
    //   console.log(idTokenResult);
    //   if (idTokenResult.claims.userType === 1) {
    //     this.locationService.getLocationsByUser(firebase.auth().currentUser.uid).subscribe((response: APIResponse) => {
    //       this.locations = new MatTableDataSource<any>(response.data);
    //     });
    //   } else if (idTokenResult.claims.userType === 2) {
    //     this.locationService.getLocationsByCouncil(idTokenResult.claims.councilId).subscribe((response: APIResponse) => {
    //       this.locations = new MatTableDataSource<any>(response.data);
    //     });
    //   } else if (idTokenResult.claims.userType === 3) {
    //     this.locationService.getAllLocations().subscribe((response: APIResponse) => {
    //       this.locations = new MatTableDataSource<any>(response.data);
    //     });
    //   }
    // });
    this.locations = new MatTableDataSource(this.data);
  }

}

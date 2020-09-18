import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { BinsService } from 'src/app/services/bins.service';
import { Router } from '@angular/router';
import { USER_TYPES } from 'src/app/services/constants';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-bin-create',
  templateUrl: './bin-create.component.html',
  styleUrls: ['./bin-create.component.css']
})
export class BinCreateComponent implements OnInit {

  locations;
  user;
  userType;

  name;
  description;
  capacity;
  locationId;

  loadData;

  constructor(
    private locationService: LocationService,
    private authService: AuthService,
    private binService: BinsService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user =>  {
      this.user = user;
      this.authService.getIdTokenResult().then(token =>  {
        this.userType = token.claims.userType;
        if (this.userType ===  USER_TYPES.COUNCIL_MEMBER) {
          this.loadData = this.loadLocationsByCouncil;
        } else if (this.userType ===  USER_TYPES.ADMIN) {
          this.loadData = this.getAllLocations();
        } else if (this.userType === USER_TYPES.CUSTOMER) {
          this.loadData = this.loadLocationsByUser;
        }
        this.loadData();
      });
      this.loadLocationsByUser();
    });
  }

  private loadLocationsByCouncil() {
    this.locationService.getLocationsByCouncilAndStatus(this.user.uid, true).subscribe((response: APIResponse) => {
      this.locations = response.data;
    });
  }

  private loadLocationsByUser() {
    this.locationService.getLocationsByUserAndStatus(this.user.uid, true).subscribe((response: APIResponse) => {
      this.locations = response.data;
    });
  }

  private getAllLocations() {

  }

  save() {
    if (!this.name || !this.capacity || !this.locationId) {
      return this.snackbar.open('Please enter all required fields', null, { duration: 3000 });
    }
    
    this.binService.createNewBin(this.locationId, this.name, this.description, this.capacity).subscribe((response: APIResponse) => {
      this.router.navigate(['dashboard/bins']);
    });
  }

  

}

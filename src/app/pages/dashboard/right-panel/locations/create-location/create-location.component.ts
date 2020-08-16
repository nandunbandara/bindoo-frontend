import { Component, OnInit } from '@angular/core';
import { CouncilsService } from 'src/app/services/councils.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { LocationService } from 'src/app/services/location.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {


  public name;
  public description;
  public councilUid;
  public tax_id;
  public building_number;
  public line_1;
  public line_2;
  public city;

  private user;

  private councils;
  constructor(
    private councilService: CouncilsService,
    private locationService: LocationService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => this.user = user);
    this.councilService.getCouncils().subscribe((response: APIResponse) => {
      this.councils = response.data;
    });
  }

  public get Councils() {
    return this.councils;
  }

  public save() {
    if (!this.name || !this.councilUid || !this.tax_id || !this.line_1 || !this.city) {
      return this.snackbar.open('Please fill in all required fields', null, { duration: 2000 });
    }

    this.locationService.createLocation(
      this.name, this.description, 1, 
      this.building_number, this.line_1, 
      this.line_2, this.city, this.user.uid, 
      this.councilUid).subscribe((response: APIResponse) => {
      this.router.navigate(['/dashboard/locations']);
    }, (err) => {
      this.snackbar.open(err.message, null, { duration: 2000 });
    });
  }
}



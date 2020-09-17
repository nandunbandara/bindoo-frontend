import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  registration_number;
  model;
  make;
  capacity;
  councilUid;

  constructor(
    private vehicleService: VehicleService,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.authService.getIdTokenResult().then(token => {
      this.councilUid = token.claims.councilId;
    });
  }

  save() {

    if (!this.registration_number || !this.model || !this.make || !this.capacity) {
      return this.snackbar.open('Please enter all required', null, { duration: 3000 });
    }

    this.vehicleService.createVehicle({ 
      registration_number: this.registration_number,
      model: this.model,
      make: this.make,
      capacity: this.capacity,
      councilUid: this.councilUid
    }).subscribe((response: APIResponse) => {
      this.router.navigate(['dashboard/vehicles'])
    })
  }

}

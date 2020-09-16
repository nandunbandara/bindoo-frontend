import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { idTokenResult } from '@angular/fire/auth-guard';

const ELEMENT_DATA = [
  { registrationNo: 'WP LA 8766', model: 'Truck', make: 'Toyota', capacity: '20l' }
];

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css']
})
export class VehiclesTableComponent implements OnInit{

  displayedColumns: string[] = ['registrationNo', 'model', 'make', 'capacity'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private vehicleService: VehicleService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getIdTokenResult().then(tokenResult => {
      this.getVehiclesByCouncil(tokenResult.claims.councilId);
    });
  }

  private getVehiclesByCouncil(councilUid: string) {
    this.vehicleService.getAllVehiclesByCouncil(councilUid).subscribe((response: APIResponse) => {
      this.dataSource = new MatTableDataSource<any>(response.data);
    });
  } 

}

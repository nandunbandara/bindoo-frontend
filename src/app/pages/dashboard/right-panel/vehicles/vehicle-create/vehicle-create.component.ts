import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { APIResponse } from 'src/app/helpers/api-response';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { registrationNo: 'WP LA 8766', model: 'Truck', make: 'Toyota', capacity: '20l' }
];

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css']
})
export class VehiclesTableComponent {

  displayedColumns: string[] = ['registrationNo', 'model', 'make', 'capacity'];
  dataSource = ELEMENT_DATA;

}

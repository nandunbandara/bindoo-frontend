import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { name: 'Bin A', description: 'Recyclable Material', location: 'Home Sweet Home', capacity: '20l' },
  { name: 'Bin B', description: 'Food', location: 'Home Sweet Home', capacity: '30l' },
  { name: 'Bin C', description: 'Plastic', location: 'Home Sweet Home', capacity: '10l' },
  { name: 'Bin A', description: 'Recyclable Material', location: 'My Apartment', capacity: '10l' },
  { name: 'Bin B', description: 'Food', location: 'My Apartment', capacity: '10l' },
  { name: 'Bin C', description: 'Plastic', location: 'My Apartment', capacity: '10l' }
];

@Component({
  selector: 'app-bins-table',
  templateUrl: './bins-table.component.html',
  styleUrls: ['./bins-table.component.css']
})
export class BinsTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'description', 'location', 'capacity', 'action'];
  dataSource = ELEMENT_DATA;

}

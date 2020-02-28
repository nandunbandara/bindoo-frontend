import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { name: 'Stupid bin', description: 'To dumb idiots', capacity: '20l' }
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

  displayedColumns: string[] = ['name', 'description', 'capacity', 'action'];
  dataSource = ELEMENT_DATA;

}

import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { id: 'INV0001', createdOn: new Date(), dueDate: new Date() },
  { id: 'INV0002', createdOn: new Date(), dueDate: new Date() }
];

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {


  displayedColumns: string[] = ['id', 'createdOn', 'dueDate', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

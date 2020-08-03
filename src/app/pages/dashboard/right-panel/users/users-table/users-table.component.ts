import { Component } from '@angular/core';

const ELEMENT_DATA = [
  { name: 'Albert Einstein', email: 'albert@cmc.lk', userType: 'Admin', status: 'Active' },
  { name: 'Adam Lewis', email: 'adam.lewis@cmc.lk', userType: 'User', status: 'Active' }
];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent {

  displayedColumns: string[] = ['name', 'email', 'userType', 'status'];
  dataSource = ELEMENT_DATA;

}

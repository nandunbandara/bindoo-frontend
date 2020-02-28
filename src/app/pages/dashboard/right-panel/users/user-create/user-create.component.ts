import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface UserType {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userTypes: UserType[] = [
    { value: 1, viewValue: 'Citizen' },
    { value: 2, viewValue: 'MC' },
    { value: 3, viewValue: 'Admin' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

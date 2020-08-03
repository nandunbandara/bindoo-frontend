import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bin-create',
  templateUrl: './bin-create.component.html',
  styleUrls: ['./bin-create.component.css']
})
export class BinCreateComponent implements OnInit {

  locations = [
    {
      id: 1,
      name: 'Home Sweet Home',
      address: '123, BumbleBee Street, Colombo 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

class Councils {
  private static councils = [
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 2,
        name: 'Dehiwala - Mt. Lavinia',
      },
      {
        id: 3,
        name: 'Sri Jayawardane Pura',
      },
      {
        id: 4,
        name: 'Moratuwa',
      },
      {
        id: 5,
        name: 'Kaduwela',
      },
      {
        id: 6,
        name: 'Negombo',
      },
      {
        id: 7,
        name: 'Gampaha',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
      {
        id: 1,
        name: 'Colombo',
      },
    ];

  public static get MunicipalCouncils(): {id: number, name: string}[] {
      return this.councils;
  }
}

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  public councils = Councils.MunicipalCouncils;

  constructor() { }

  ngOnInit() {
  }

}



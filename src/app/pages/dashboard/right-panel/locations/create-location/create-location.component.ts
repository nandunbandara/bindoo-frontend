import { Component, OnInit } from '@angular/core';
import { CouncilsService } from 'src/app/services/councils.service';
import { APIResponse } from 'src/app/helpers/api-response';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {


  private councils;
  constructor(
    private councilService: CouncilsService,
  ) { }

  ngOnInit() {
    this.councilService.getCouncils().subscribe((response: APIResponse) => {
      this.councils = response.data;
    });
  }

  public get Councils() {
    return this.councils;
  }

}



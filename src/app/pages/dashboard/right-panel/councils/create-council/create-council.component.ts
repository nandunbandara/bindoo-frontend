import { Component, OnInit } from '@angular/core';
import { CouncilsService } from 'src/app/services/councils.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-council',
  templateUrl: './create-council.component.html',
  styleUrls: ['./create-council.component.css']
})
export class CreateCouncilComponent implements OnInit {

  name;
  description;
  email;
  password;

  constructor(
    private councilService: CouncilsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public createCouncil() {
    this.councilService.createNewCouncil({
      name: this.name, description: this.description, 
      email: this.email, password: this.password
    }).subscribe((response: APIResponse) => {
      this.router.navigate(['dashboard/councils']);
    })
  }

}

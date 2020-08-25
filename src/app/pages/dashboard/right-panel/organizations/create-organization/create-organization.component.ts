import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  name;
  description;
  email;
  password;

  constructor(
    private organizationService: OrganizationsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public save() {
    this.organizationService.createOrganization(this.name, this.description, this.email, this.password)
    .subscribe((response: APIResponse) => {
      this.router.navigate(['/dashboard/organizations']);
    });
  }

}

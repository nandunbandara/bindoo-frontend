import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { APIResponse } from 'src/app/helpers/api-response';

@Component({
  selector: 'app-create-recycleable-items',
  templateUrl: './create-recycleable-items.component.html',
  styleUrls: ['./create-recycleable-items.component.css']
})
export class CreateRecycleableItemsComponent implements OnInit {

  organizations;

  constructor(
    private authService: AuthService,
    private organizationService: OrganizationsService
  ) { }

  ngOnInit() {
    this.loadAllOrganizations();
  }

  private loadAllOrganizations() {
    this.organizationService.getOrganizations().subscribe((response: APIResponse) => {
      this.organizations = response.data;
    });
  }

}

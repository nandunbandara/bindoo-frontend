import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from 'src/app/services/organizations.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-organizations-view',
  templateUrl: './organizations-view.component.html',
  styleUrls: ['./organizations-view.component.css']
})
export class OrganizationsViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'description', 'actions'];

  organizations: MatTableDataSource<any>;

  constructor(
    private organizationService: OrganizationsService
  ) { }

  ngOnInit() {
    this.getAllOrganizations();
  }

  private getAllOrganizations() {
    this.organizationService.getOrganizations().subscribe((response: APIResponse) => {
      this.organizations = new MatTableDataSource<any>(response.data);
    })
  }

  public removeOrganization(id: string) {
    this.organizationService.deleteOrganization(id).subscribe((response: APIResponse) => {
      if (response.success) {
        this.getAllOrganizations();
      }
    });
  }

}

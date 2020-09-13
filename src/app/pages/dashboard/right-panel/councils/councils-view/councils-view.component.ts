import { Component, OnInit } from '@angular/core';
import { CouncilsService } from 'src/app/services/councils.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-councils-view',
  templateUrl: './councils-view.component.html',
  styleUrls: ['./councils-view.component.css']
})
export class CouncilsViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'description', 'actions'];

  organizations: MatTableDataSource<any>;

  constructor(
    private councilService: CouncilsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCouncils();
  }

  private getCouncils() {
    return this.councilService.getCouncils().subscribe((response: APIResponse) => {
      this.organizations = new MatTableDataSource<any>(response.data);
    });
  }

}

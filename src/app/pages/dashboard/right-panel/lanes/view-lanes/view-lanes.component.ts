import { Component, OnInit } from '@angular/core';
import { LaneService } from 'src/app/services/lane.service';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-lanes',
  templateUrl: './view-lanes.component.html',
  styleUrls: ['./view-lanes.component.css']
})
export class ViewLanesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'actions'];
  uid;
  lanes: MatTableDataSource<any>;

  constructor(
    private authService: AuthService,
    private laneService: LaneService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.authService.getCurrentUser().subscribe(user => {
      this.uid = user.uid;
      this.laneService.getLanesByCouncil(this.uid).subscribe((response: APIResponse) => {
        this.lanes = new MatTableDataSource<any>(response.data);
      });
    });
  }

}

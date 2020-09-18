import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BinsService } from 'src/app/services/bins.service';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/helpers/api-response';

const ELEMENT_DATA = [
  { name: 'Bin A', description: 'Recyclable Material', location: 'Home Sweet Home', capacity: '20l' },
  { name: 'Bin B', description: 'Food', location: 'Home Sweet Home', capacity: '30l' },
  { name: 'Bin C', description: 'Plastic', location: 'Home Sweet Home', capacity: '10l' },
  { name: 'Bin A', description: 'Recyclable Material', location: 'My Apartment', capacity: '10l' },
  { name: 'Bin B', description: 'Food', location: 'My Apartment', capacity: '10l' },
  { name: 'Bin C', description: 'Plastic', location: 'My Apartment', capacity: '10l' }
];

@Component({
  selector: 'app-bins-table',
  templateUrl: './bins-table.component.html',
  styleUrls: ['./bins-table.component.css']
})
export class BinsTableComponent implements OnInit {

  bins: MatTableDataSource<any>;
  user;
  councilUid: string;
  userType: number;

  displayedColumns: string[] = ['name', 'description', 'location', 'capacity', 'action'];

  all = true;

  constructor(
    private binService: BinsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getIdTokenResult().then(tokenResult => {
      this.userType = tokenResult.claims.userType;
      this.councilUid = tokenResult.claims.councilId;
      if (this.userType === 1) {
        this.getBinsByUser();
      } else if (this.userType === 2) {
        this.getBinsByCouncilAndStatus();
      };
    });
  }

  private getBinsByUser() {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
      this.binService.getAllBinsByUser(this.user.uid).subscribe((response: APIResponse) => {
        console.log(response.data);
        this.bins = new MatTableDataSource<any>(response.data);
      });
    });
  }

  private getBinsByCouncilAndStatus() {
    this.all = false
    this.binService.getBinByCouncilAndStatus(this.councilUid, true).subscribe((response: APIResponse) => {
      this.bins = new MatTableDataSource<any>(response.data);
      console.log(response.data);
    });
  }

  private getAllBinsByCouncil() {
    this.all = true;
    this.binService.getBinsByCouncil(this.councilUid).subscribe((response: APIResponse) => {
      this.bins = new MatTableDataSource<any>(response.data);
    });
  }

  public markReadyToPickup(id: string) {
    this.binService.markAsReadyForPickup(id).subscribe((response: APIResponse) => {
      this.getBinsByUser();
    });
  }

}

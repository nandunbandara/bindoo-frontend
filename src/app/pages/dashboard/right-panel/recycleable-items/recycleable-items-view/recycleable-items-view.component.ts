import { Component, OnInit } from '@angular/core';
import { RecyclableItemService } from 'src/app/services/recyclable-item.service';
import { MatTableDataSource } from '@angular/material';
import { APIResponse } from 'src/app/helpers/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { idTokenResult } from '@angular/fire/auth-guard';
import { USER_TYPES } from 'src/app/services/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recycleable-items-view',
  templateUrl: './recycleable-items-view.component.html',
  styleUrls: ['./recycleable-items-view.component.css']
})
export class RecycleableItemsViewComponent implements OnInit {

  loadData;
  status;
  items: MatTableDataSource<any>;
  uid;
  userType;

  displayedColumns: string[] = ['name', 'description', 'status', 'actions'];
  organizations;

  constructor(
    private recyclableItemService: RecyclableItemService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getIdTokenResult().then(idTokenResult => {
      this.userType = idTokenResult.claims.userType;
      this.uid = idTokenResult.claims.user_id;
      if (this.userType === USER_TYPES.CUSTOMER) {
        this.loadData = this.getRecyclableItemsByUser;
      } else if (this.userType === USER_TYPES.ADMIN) {
        this.loadData = this.getAllRecyclableItems;
      } else if (this.userType === USER_TYPES.COUNCIL_MEMBER) {
        this.loadData = this.getRecyclableItemsByCouncil;
      }
      this.loadData();
    });
  }

  private getAllRecyclableItems() {
    this.recyclableItemService
      .getAllRecyclableItems(this.status)
      .subscribe((response: APIResponse) => this.handleResponse(response));
  }

  private getRecyclableItemsByUser() {
    return this.recyclableItemService
      .getRecyclableItemsByUsers(this.uid, this.status)
      .subscribe((response: APIResponse) => this.handleResponse(response));
  }

  private getRecyclableItemsByCouncil() {
    return this.recyclableItemService
      .getRecyclableItemsByCouncil(this.uid, this.status)
      .subscribe((response: APIResponse) => this.handleResponse(response));
  }

  private handleResponse(response: APIResponse) {
    this.items = new MatTableDataSource<any>(response.data);
  }

}

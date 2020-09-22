import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LaneService } from 'src/app/services/lane.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lane',
  templateUrl: './create-lane.component.html',
  styleUrls: ['./create-lane.component.css']
})
export class CreateLaneComponent implements OnInit {

  name: string;
  uid: string;

  constructor(
    private authService: AuthService,
    private laneService: LaneService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => this.uid = user.uid);
  }

  public save() {
    if (!this.name) {
      return this.toastr.error('Please enter a name', 'Empty fields');
    }
    this.laneService.createLane(this.name, this.uid).subscribe((response: APIResponse) => {
      if (response.success) {
        this.toastr.success('Created new lane \'' + this.name +'\'', 'New Lane');
        this.router.navigate(['/dashboard/lanes']);
      }
    });
  }

}

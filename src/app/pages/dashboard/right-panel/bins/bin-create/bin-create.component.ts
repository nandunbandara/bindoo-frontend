import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { BinsService } from 'src/app/services/bins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bin-create',
  templateUrl: './bin-create.component.html',
  styleUrls: ['./bin-create.component.css']
})
export class BinCreateComponent implements OnInit {

  locations;
  user;

  name;
  description;
  capacity;
  locationId;

  constructor(
    private locationService: LocationService,
    private authService: AuthService,
    private binService: BinsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user =>  {
      this.user = user;
      this.loadLocationsByUser();
    });
  }

  private loadLocationsByUser() {
    this.locationService.getLocationsByUserAndStatus(this.user.uid, true).subscribe((response: APIResponse) => {
      this.locations = response.data;
    });
  }

  save() {
    this.binService.createNewBin(this.locationId, this.name, this.description, this.capacity).subscribe((response: APIResponse) => {
      this.router.navigate(['dashboard/bins']);
    })
  }

  

}

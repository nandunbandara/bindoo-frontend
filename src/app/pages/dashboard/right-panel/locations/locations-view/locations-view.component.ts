import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.css']
})
export class LocationsViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'verified', 'actions'];

  constructor(
    private locationService: LocationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user: firebase.User) => {
      
    });
  }

}

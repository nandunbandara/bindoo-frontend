import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { ToastrService } from 'ngx-toastr';
import Pusher from 'pusher-js';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private loading = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private userService: UserService,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    var pusher = new Pusher('a887b115c97b94bf99a6', {
      cluster: 'ap2'
    });

    this.authService.getCurrentUser().subscribe((user) => {
      if (!user) {
        return this.logout();
      }

      console.log('Dashboard component');

      this.authService.getIdTokenResult().then(tokenResult => {
        console.log(tokenResult.claims.userType);
        if (tokenResult.claims.userType === 1 && !user.emailVerified) {
          return this.router.navigate(['emailverification']);
        }
  
        console.log('User in dashboard: ', user);

        const channel = pusher.subscribe(user.uid);
        channel.bind('new-location', (data) => {
          this.toast.info('An user submitted a new location for your reviewal.', 'New Location')
            .onTap.pipe(take(1)).subscribe(() => this.router.navigate(['/dashboard/locations']));
        });

        channel.bind('location-verified', (data) => {
          this.toast.info('The council verified your location.', 'Location Verified');
        });

        channel.bind('new_ready_for_pickup', data => {
          this.toast.info('A bin was marked as ready for pickup by a user.', 'Ready for pickup')
            .onTap.pipe(take(1)).subscribe(() =>  this.router.navigate(['dashboard/bins']));
        });

        channel.bind('location_suspended', data => {
          this.toast.error('Your location has been suspended by the council/admin', 'Location Suspended')
            .onTap.pipe(take(1)).subscribe(() =>  this.router.navigate(['dashboard/locations']));
        });

        this.userService.getUserByUid(user.uid).subscribe((response: APIResponse) => {
          if (response.success && tokenResult.claims.userType === 1 && !response.data.stripeToken) {
            this.router.navigate(['paymentinformation']);
          }
        });
  
        this.loading = false;
      })

    });
  }

  public get isLoading(): boolean {
    return this.loading;
  }

  public logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['']))
      .catch(err => this._snackBar.open(err.message, null, { duration: 2000 }));
  }

}

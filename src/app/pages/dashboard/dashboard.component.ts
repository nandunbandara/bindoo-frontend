import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { APIResponse } from 'src/app/helpers/api-response';

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
    private userService: UserService
  ) { }

  ngOnInit() {
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

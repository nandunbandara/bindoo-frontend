import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { APIResponse } from 'src/app/helpers/api-response';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  private user: firebase.User;
  private isValidating: boolean;
  private showVerifyingMessage: boolean;
  private showSuccessMessage: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isValidating = true;
    this.authService.getCurrentUser().subscribe((user: firebase.User) => this.user = user);
    this.route.queryParams.subscribe(params => {
      if (params.token) {
          this.authService.verifyEmail(this.user.uid, params.token).subscribe((response: APIResponse) => {
            if(response.success) {
              this.router.navigate(['paymentinformation']);
            }
          })
      } else {
        this.isValidating = false;
      }
    });
  }

  public get Validating(): boolean {
    return this.isValidating;
  }

}

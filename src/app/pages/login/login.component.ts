import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private matcher: LoginErrorStateMatcher;
  private emailFormControl: FormControl;
  private passwordFormControl: FormControl;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.matcher = new LoginErrorStateMatcher();
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = new FormControl('', []);
  }

  public get Matcher(): ErrorStateMatcher {
    return this.matcher;
  }

  public get EmailFormControl(): FormControl {
    return this.emailFormControl;
  }

  public get PasswordFormControl(): FormControl {
    return this.passwordFormControl;
  }

  login() {

    console.log(this.emailFormControl.value, this.passwordFormControl.value);

    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value).then(user => {
      console.log(user);
    }).catch(err => {
      console.log(err);
      switch (err.code) {
        case 'auth/user-not-found':
          this.emailFormControl.setErrors({incorrect: true});
          break;
        case 'auth/wrong-password':
          this.passwordFormControl.setErrors({ incorrect: true });
          break;
      }
    });

  }

  

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { PaymentInformationComponent } from './pages/payment-information/payment-information.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {
    path: '', component: LandingComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectLoggedInToItems },
    children: [
      { path: '', component: LoginComponent, data: { animation: 'Login'} },
      { path: 'signup', component: SignupComponent, data: { animation: 'SignUp' } },
      { path: 'emailverification', component: EmailVerificationComponent, data: { animation: 'EmailVerification'} },
      { path: 'paymentinformation', component: PaymentInformationComponent, data: { animation: 'PaymentInformation'} }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedTo }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

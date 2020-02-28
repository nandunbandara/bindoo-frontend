import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { PaymentInformationComponent } from './pages/payment-information/payment-information.component';
import { LocationsComponent } from './pages/dashboard/right-panel/locations/locations.component';
import { BinsComponent } from './pages/dashboard/right-panel/bins/bins.component';
import { UsersComponent } from './pages/dashboard/right-panel/users/users.component';
import { StoreComponent } from './pages/dashboard/right-panel/store/store.component';
import { VehiclesComponent } from './pages/dashboard/right-panel/vehicles/vehicles.component';
import { UsersTableComponent } from './pages/dashboard/right-panel/users/users-table/users-table.component';
import { UserCreateComponent } from './pages/dashboard/right-panel/users/user-create/user-create.component';
import { VehiclesTableComponent } from './pages/dashboard/right-panel/vehicles/vehicles-table/vehicles-table.component';
import { VehicleCreateComponent } from './pages/dashboard/right-panel/vehicles/vehicle-create/vehicle-create.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {
    path: '', component: LandingComponent,
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectLoggedInToItems },
    children: [
      { path: '', component: LoginComponent, data: { animation: 'Login' } },
      { path: 'signup', component: SignupComponent, data: { animation: 'SignUp' } },
      { path: 'emailverification', component: EmailVerificationComponent, data: { animation: 'EmailVerification' } },
      { path: 'paymentinformation', component: PaymentInformationComponent, data: { animation: 'PaymentInformation' } }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'locations', component: LocationsComponent },
      { path: 'bins', component: BinsComponent },
      { path: 'store', component: StoreComponent },
      {
        path: 'vehicles', component: VehiclesComponent, children: [
          { path: '', component: VehiclesTableComponent },
          { path: 'add', component: VehicleCreateComponent },
        ]
      },
      {
        path: 'users', component: UsersComponent, children: [
          { path: '', component: UsersTableComponent },
          { path: 'add', component: UserCreateComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

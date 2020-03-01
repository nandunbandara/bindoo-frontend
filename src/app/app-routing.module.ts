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
import { BinsTableComponent } from './pages/dashboard/right-panel/bins/bins-table/bins-table.component';
import { BinCreateComponent } from './pages/dashboard/right-panel/bins/bin-create/bin-create.component';
import { LocationsViewComponent } from './pages/dashboard/right-panel/locations/locations-view/locations-view.component';
import { CreateLocationComponent } from './pages/dashboard/right-panel/locations/create-location/create-location.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {
    path: '', component: LandingComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
    children: [
      { path: '', component: LoginComponent, data: { animation: 'Login' } },
      { path: 'signup', component: SignupComponent, data: { animation: 'SignUp' } },
      { path: 'emailverification', component: EmailVerificationComponent, data: { animation: 'EmailVerification' } },
      { path: 'paymentinformation', component: PaymentInformationComponent, data: { animation: 'PaymentInformation' } }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: '', redirectTo: 'locations', pathMatch: 'full'
      },
      {
        path: 'locations', component: LocationsComponent, children: [
          { path: '', component: LocationsViewComponent },
          { path: 'add', component: CreateLocationComponent },
        ]
      },
      {
        path: 'bins', component: BinsComponent, children: [
          { path: '', component: BinsTableComponent },
          { path: 'add', component: BinCreateComponent },
        ]
      },
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
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

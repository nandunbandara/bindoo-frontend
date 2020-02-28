import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { PaymentInformationComponent } from './pages/payment-information/payment-information.component';
import { LeftPanelComponent } from './pages/dashboard/left-panel/left-panel.component';
import { LocationsComponent } from './pages/dashboard/right-panel/locations/locations.component';
import { BinsComponent } from './pages/dashboard/right-panel/bins/bins.component';
import { UsersComponent } from './pages/dashboard/right-panel/users/users.component';
import { VehiclesComponent } from './pages/dashboard/right-panel/vehicles/vehicles.component';
import { StoreComponent } from './pages/dashboard/right-panel/store/store.component';
import { UsersTableComponent } from './pages/dashboard/right-panel/users/users-table/users-table.component';
import { MatTableModule } from '@angular/material';
import { UserCreateComponent } from './pages/dashboard/right-panel/users/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LandingComponent,
    EmailVerificationComponent,
    PaymentInformationComponent,
    LeftPanelComponent,
    LocationsComponent,
    BinsComponent,
    UsersComponent,
    VehiclesComponent,
    StoreComponent,
    UsersTableComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [
    AngularFireAuth,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgApexchartsModule} from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HttpClientModule } from '@angular/common/http'; 
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
import { MatTableModule, MatBadgeModule } from '@angular/material';
import { UserCreateComponent } from './pages/dashboard/right-panel/users/user-create/user-create.component';
import { VehiclesTableComponent } from './pages/dashboard/right-panel/vehicles/vehicles-table/vehicles-table.component';
import { VehicleCreateComponent } from './pages/dashboard/right-panel/vehicles/vehicle-create/vehicle-create.component';
import { BinsTableComponent } from './pages/dashboard/right-panel/bins/bins-table/bins-table.component';
import { BinCreateComponent } from './pages/dashboard/right-panel/bins/bin-create/bin-create.component';
import { LocationsViewComponent } from './pages/dashboard/right-panel/locations/locations-view/locations-view.component';
import { CreateLocationComponent } from './pages/dashboard/right-panel/locations/create-location/create-location.component';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { InvoicesComponent } from './pages/dashboard/right-panel/invoices/invoices.component';
import { AnalyticsComponent } from './pages/dashboard/right-panel/analytics/analytics.component';
import { OrganizationsComponent } from './pages/dashboard/right-panel/organizations/organizations.component';
import { OrganizationsViewComponent } from './pages/dashboard/right-panel/organizations/organizations-view/organizations-view.component';
import { CreateOrganizationComponent } from './pages/dashboard/right-panel/organizations/create-organization/create-organization.component';
import { StatisticsService } from './services/statistics.service';
import { LocationService } from './services/location.service';
import { CouncilsService } from './services/councils.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CouncilsComponent } from './pages/dashboard/right-panel/councils/councils.component';
import { CouncilsViewComponent } from './pages/dashboard/right-panel/councils/councils-view/councils-view.component';
import { CreateCouncilComponent } from './pages/dashboard/right-panel/councils/create-council/create-council.component';
import { RecycleableItemsComponent } from './pages/dashboard/right-panel/recycleable-items/recycleable-items.component';
import { RecycleableItemsViewComponent } from './pages/dashboard/right-panel/recycleable-items/recycleable-items-view/recycleable-items-view.component';
import { CreateRecycleableItemsComponent } from './pages/dashboard/right-panel/recycleable-items/create-recycleable-items/create-recycleable-items.component';

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
    UserCreateComponent,
    VehiclesTableComponent,
    VehicleCreateComponent,
    BinsTableComponent,
    BinCreateComponent,
    LocationsViewComponent,
    CreateLocationComponent,
    InvoicesComponent,
    AnalyticsComponent,
    OrganizationsComponent,
    OrganizationsViewComponent,
    CreateOrganizationComponent,
    LoaderComponent,
    CouncilsComponent,
    CouncilsViewComponent,
    CreateCouncilComponent,
    RecycleableItemsComponent,
    RecycleableItemsViewComponent,
    CreateRecycleableItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthGuardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatBadgeModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [
    AngularFireAuth,
    AuthService,
    StatisticsService,
    LocationService,
    CouncilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

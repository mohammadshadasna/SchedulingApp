import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomFormsModule } from "ng2-validation";
import { HttpClientModule } from "@angular/common/http";
import { DataTableModule } from "angular-6-datatable";

import { FullCalendarModule } from "ng-fullcalendar";
import { AppComponent } from "./app.component";
import { HomeCalendarComponent } from "./CalendarComponents/home-calendar/home-calendar.component";
import { BsNavbarComponent } from "./CalendarComponents/bs-navbar/bs-navbar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DayCalendarComponent } from "./CalendarComponents/day-calendar/day-calendar.component";
import { NewEventService } from "./services/new-event.service";
import { EventService } from "./services/event.service";
import { SignUpComponent } from "./AuthenticationComponent/sign-up/sign-up.component";
import { ConfirmEqualValidatorDirective } from "./shared/confirm-email-validator.directive";
import { UserService } from "./services/user.service";
import { ToastrModule } from "ngx-toastr";
import { SignInComponent } from "./AuthenticationComponent/sign-in/sign-in.component";
import { AppRoutingModule } from ".//app-routing.module";
import { AuthService } from "./services/auth.service";
import { TestComponent } from "./Admin/test/test.component";
import { ForbiddenComponent } from "./AuthenticationComponent/forbidden/forbidden.component";
import { MonthlyReportsComponent } from "./Reports/monthly-reports/monthly-reports.component";
import { IndexComponent } from "./CalendarComponents/index/index.component";
import { DepartmentService } from "./services/department.service";
import { RegisterAdminComponent } from "./SuperAdmin/register-admin/register-admin.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { GeneralLoadingComponent } from "./common/general-loading/general-loading.component";
import { ChangePasswordComponent } from "./user/change-password/change-password.component";
import { FooterComponent } from "./common/footer/footer.component";
import { SelectDepartmentComponent } from "./CalendarComponents/select-department/select-department.component";
import { WeeklyReportsComponent } from "./Reports/weekly-reports/weekly-reports.component";
import { ReportService } from "./services/report.service";
//import { RegisterComponent } from './AuthenticationComponent/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCalendarComponent,
    BsNavbarComponent,
    NotFoundComponent,
    DayCalendarComponent,
    SignUpComponent,
    ConfirmEqualValidatorDirective,
    SignInComponent,
    TestComponent,
    ForbiddenComponent,
    MonthlyReportsComponent,
    IndexComponent,
    RegisterAdminComponent,
    ProfileComponent,
    GeneralLoadingComponent,
    ChangePasswordComponent,
    FooterComponent,
    SelectDepartmentComponent,
    WeeklyReportsComponent
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTableModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FullCalendarModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent],
  providers: [
    EventService,
    NewEventService,
    UserService,
    AuthService,
    DepartmentService,
    ReportService
  ]
})
export class AppModule {}

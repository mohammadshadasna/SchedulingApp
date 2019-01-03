"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_validation_1 = require("ng2-validation");
var http_1 = require("@angular/common/http");
var ng_fullcalendar_1 = require("ng-fullcalendar");
var app_component_1 = require("./app.component");
var home_calendar_component_1 = require("./CalendarComponents/home-calendar/home-calendar.component");
var bs_navbar_component_1 = require("./CalendarComponents/bs-navbar/bs-navbar.component");
var not_found_component_1 = require("./not-found/not-found.component");
var day_calendar_component_1 = require("./CalendarComponents/day-calendar/day-calendar.component");
var new_event_service_1 = require("./services/new-event.service");
var event_service_1 = require("./services/event.service");
var sign_up_component_1 = require("./AuthenticationComponent/sign-up/sign-up.component");
var confirm_email_validator_directive_1 = require("./shared/confirm-email-validator.directive");
var user_service_1 = require("./services/user.service");
var ngx_toastr_1 = require("ngx-toastr");
var sign_in_component_1 = require("./AuthenticationComponent/sign-in/sign-in.component");
var app_routing_module_1 = require(".//app-routing.module");
var auth_service_1 = require("./services/auth.service");
var test_component_1 = require("./Admin/test/test.component");
var forbidden_component_1 = require("./AuthenticationComponent/forbidden/forbidden.component");
var monthly_reports_component_1 = require("./Reports/monthly-reports/monthly-reports.component");
var index_component_1 = require("./CalendarComponents/index/index.component");
var department_service_1 = require("./services/department.service");
var register_admin_component_1 = require("./SuperAdmin/register-admin/register-admin.component");
var profile_component_1 = require("./user/profile/profile.component");
var general_loading_component_1 = require("./common/general-loading/general-loading.component");
//import { RegisterComponent } from './AuthenticationComponent/register/register.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_calendar_component_1.HomeCalendarComponent,
                bs_navbar_component_1.BsNavbarComponent,
                not_found_component_1.NotFoundComponent,
                day_calendar_component_1.DayCalendarComponent,
                sign_up_component_1.SignUpComponent,
                confirm_email_validator_directive_1.ConfirmEqualValidatorDirective,
                sign_in_component_1.SignInComponent,
                test_component_1.TestComponent,
                forbidden_component_1.ForbiddenComponent,
                monthly_reports_component_1.MonthlyReportsComponent,
                index_component_1.IndexComponent,
                register_admin_component_1.RegisterAdminComponent,
                profile_component_1.ProfileComponent,
                general_loading_component_1.GeneralLoadingComponent
                //RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_2.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                ng_fullcalendar_1.FullCalendarModule,
                ng2_validation_1.CustomFormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                event_service_1.EventService,
                new_event_service_1.NewEventService,
                user_service_1.UserService,
                auth_service_1.AuthService,
                department_service_1.DepartmentService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
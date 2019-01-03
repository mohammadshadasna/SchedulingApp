"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sign_in_component_1 = require("./AuthenticationComponent/sign-in/sign-in.component");
var sign_up_component_1 = require("./AuthenticationComponent/sign-up/sign-up.component");
var home_calendar_component_1 = require("./CalendarComponents/home-calendar/home-calendar.component");
var day_calendar_component_1 = require("./CalendarComponents/day-calendar/day-calendar.component");
var not_found_component_1 = require("./not-found/not-found.component");
var auth_guard_1 = require("./guards/auth.guard");
//import { TestComponent } from './Admin/test/test.component';
var forbidden_component_1 = require("./AuthenticationComponent/forbidden/forbidden.component");
var index_component_1 = require("./CalendarComponents/index/index.component");
var register_admin_component_1 = require("./SuperAdmin/register-admin/register-admin.component");
var profile_component_1 = require("./user/profile/profile.component");
//import { RegisterComponent } from './AuthenticationComponent/register/register.component';
var appRoutes = [
    { path: '', component: sign_in_component_1.SignInComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'signUp', component: sign_up_component_1.SignUpComponent },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'forbidden', component: forbidden_component_1.ForbiddenComponent, canActivate: [auth_guard_1.AuthGuard] },
    // { path: 'adminRegister', component:RegisterAdminComponent,canActivate:[AuthGuard],data: {roles: ['SuperAdmin']} },
    { path: 'adminRegister', component: register_admin_component_1.RegisterAdminComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'homeCalendar', component: home_calendar_component_1.HomeCalendarComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'dayCalendar/:date', component: day_calendar_component_1.DayCalendarComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: "**", component: not_found_component_1.NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            providers: [auth_guard_1.AuthGuard],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
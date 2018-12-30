import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './AuthenticationComponent/sign-in/sign-in.component';
import { SignUpComponent } from './AuthenticationComponent/sign-up/sign-up.component';
import { HomeCalendarComponent } from './CalendarComponents/home-calendar/home-calendar.component';
import { DayCalendarComponent } from './CalendarComponents/day-calendar/day-calendar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
//import { TestComponent } from './Admin/test/test.component';
import { ForbiddenComponent } from './AuthenticationComponent/forbidden/forbidden.component';
import { IndexComponent } from './CalendarComponents/index/index.component';
import { RegisterAdminComponent } from './SuperAdmin/register-admin/register-admin.component';
import { ProfileComponent } from './user/profile/profile.component';
//import { RegisterComponent } from './AuthenticationComponent/register/register.component';


const appRoutes : Routes = [
  { path: '', component: SignInComponent },
  {path:'profile', component:ProfileComponent},
  { path: 'signUp', component: SignUpComponent },
  { path: 'index', component:IndexComponent},
  {path: 'forbidden', component: ForbiddenComponent,canActivate: [AuthGuard]},
  { path: 'adminRegister', component:RegisterAdminComponent,canActivate:[AuthGuard],data: {roles: ['SuperAdmin']} },
  { path: 'homeCalendar', component: HomeCalendarComponent,canActivate:[AuthGuard] },
  { path: 'dayCalendar/:date', component: DayCalendarComponent,canActivate:[AuthGuard] },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers:[AuthGuard],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }

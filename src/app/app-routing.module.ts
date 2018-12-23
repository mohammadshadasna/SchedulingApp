import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './AuthenticationComponent/sign-in/sign-in.component';
import { SignUpComponent } from './AuthenticationComponent/sign-up/sign-up.component';
import { HomeCalendarComponent } from './CalendarComponents/home-calendar/home-calendar.component';
import { DayCalendarComponent } from './CalendarComponents/day-calendar/day-calendar.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { RegisterComponent } from './AuthenticationComponent/register/register.component';


const appRoutes : Routes = [
  { path: '', component: SignInComponent },
  //{path:'register', component:RegisterComponent},
  { path: 'signUp', component: SignUpComponent },
  { path: 'homeCalendar', component: HomeCalendarComponent },
  { path: 'dayCalendar/:date', component: DayCalendarComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }

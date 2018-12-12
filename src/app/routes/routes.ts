import { Routes } from "@angular/router";
import { HomeCalendarComponent } from "../CalendarComponents/home-calendar/home-calendar.component";
import { DayCalendarComponent } from "../CalendarComponents/day-calendar/day-calendar.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { SignUpComponent } from "../AuthenticationComponent/sign-up/sign-up.component";


export const appRoutes: Routes = [
  { path: '', component: SignUpComponent },
  //{ path: '', redirectTo: '/homeCalendar', pathMatch: 'full' },
  { path: 'homeCalendar', component: HomeCalendarComponent },
  { path: 'dayCalendar/:date', component: DayCalendarComponent },
  //{path:'dayCalendar/:model', component:DayCalendarComponent},
  // {path:'components/Admin/approve', component:ApproveAppointmentComponent},
  // {path:'components/Admin/edit', component:EditAppointmentComponent},
  // {path:'components/Admin/cancel', component:CancelAppointmentComponent}
  { path: '**', component: NotFoundComponent }
];
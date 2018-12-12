
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from 'ng2-validation';
import {HttpClientModule} from '@angular/common/http';

import { FullCalendarModule } from 'ng-fullcalendar';
import { AppComponent } from './app.component';
import { HomeCalendarComponent } from './CalendarComponents/home-calendar/home-calendar.component';
import { BsNavbarComponent } from './CalendarComponents/bs-navbar/bs-navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DayCalendarComponent } from './CalendarComponents/day-calendar/day-calendar.component';
import { NewEventService } from './services/new-event.service';
import { appRoutes } from './routes/routes';
import { EventService } from './services/event.service';
import { SignUpComponent } from './AuthenticationComponent/sign-up/sign-up.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-email-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeCalendarComponent,
    BsNavbarComponent,
    NotFoundComponent,
    DayCalendarComponent,
    SignUpComponent,
    ConfirmEqualValidatorDirective
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FullCalendarModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    //RouterModule.forRoot(appRoutes),
    RouterModule.forRoot([
      { path: '', component: SignUpComponent },
      //{ path: '', redirectTo: '/homeCalendar', pathMatch: 'full' },
//{ path: '', component: HomeCalendarComponent },
      { path: 'homeCalendar', component: HomeCalendarComponent },
      { path: 'dayCalendar/:date', component: DayCalendarComponent },
      //{path:'dayCalendar/:model', component:DayCalendarComponent},
      // {path:'components/Admin/approve', component:ApproveAppointmentComponent},
      // {path:'components/Admin/edit', component:EditAppointmentComponent},
      // {path:'components/Admin/cancel', component:CancelAppointmentComponent}
      { path: '**', component: NotFoundComponent }
    ]),
    FormsModule

    
  ],

  bootstrap: [
    AppComponent
  ],
  providers: [
    EventService,
    NewEventService
  ]
})
export class AppModule { }

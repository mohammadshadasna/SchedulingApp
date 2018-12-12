import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';
//import { EventSesrvice } from '../../event.service';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.css']
})
export class HomeCalendarComponent implements OnInit {
  //clickedDate: string[];
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  
  constructor(
    //private eventService: EventSesrvice,
    private eventService : EventService,
    private router : Router
    ) {
      
     }

  ngOnInit() {
    //this.eventService.getAllAppointments().subscribe((data:any) => {

    this.eventService.getEvents().subscribe(data => {
      //console.log(data);
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek'
      },
      //events: data
      events:data
      
    };
     });
     //console.log(this.eventService.allAppointments);
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }

  dayClick(model: any) {
    
    const clickedDate = new Date(model).toLocaleString('en-US').split(', ');
    //const clickedDate = new Date(model).split(', ');
    //console.log(this.eventService.allAppointments);
    this.router.navigate(['/dayCalendar',clickedDate[0]]);
  }

  eventClick(model: any) {
    console.log(model);
    //if(localStorage.getItem('appointment') != null)
    model = {
      event: {
        id: model.event.id,
        
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      
      duration: {}
    }
    //console.log(model.event.start);
    const clickedDate = new Date(model.event.start).toLocaleString('en-US').split(', ');
    this.router.navigate(['/dayCalendar',clickedDate[0]],
    //to pass query parameter use below line of code
    //{
    //  queryParams: {
    //    start:model.event.start
        // model: {
        //   event: {
        //     id: model.event.id,
        //     start: model.event.start,
        //     end: model.event.end,
        //     title: model.event.title,
        //     allDay: model.event.allDay
        //   },
        // }

     // }
    //}
    );
  }
  
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }


}

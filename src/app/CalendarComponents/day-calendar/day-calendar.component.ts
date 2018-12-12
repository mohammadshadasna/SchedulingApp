import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Options } from 'fullcalendar';
import { EventService } from '../../services/event.service';
import { CalendarComponent } from 'ng-fullcalendar';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NewEvent } from '../../models/newEvent';
import { NewEventService } from '../../services/new-event.service';


@Component({
  selector: 'day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent implements OnInit {
  title: string;
  start: string;
  end: string;
  newEvent:NewEvent;
  clickedDate: string[];
 
  getDateClicked: string;//property holding parameters coming from home calendar
  dayCalendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendarDay : CalendarComponent

  constructor(
    private eventService: EventService,
    private newEventService: NewEventService,
    private activatedRoute: ActivatedRoute,
    private router : Router
    
  ) {


  }

  OnSubmit(title: string){
    
    this.start = this.clickedDate.toString();
    
    this.end = this.clickedDate.toString();
    
    this.eventService.insertAppointment(title,this.start,this.end).subscribe(
    
      (data : any) =>{
        localStorage.clear();
        localStorage.setItem('appointment',JSON.stringify(data));
        //console.log(localStorage.getItem('appointment'));
        //this.router.navigate(['/homeCalendar']);
        this.eventService.getAllAppointments().subscribe(
          (data:any)=>{
            this.eventService.allAppointments = data;
            //console.log(data);
            //.log(this.eventService.allAppointments);
          });
        
      }
    );
  }

  // getData(newEvent) {
  //   this.newEvent[1].title = newEvent.title;
  //   console.log(newEvent[1].title);
    
  // }

  getTitle(title){
    //console.log(title);
  }

  ngOnInit() {

    //getting route parameter
    this.activatedRoute.paramMap.subscribe(params => {
      //console.log(params);
      this.getDateClicked = params.get('date');
    });
    //getting query parameters
    // this.activatedRoute.queryParamMap.subscribe(query =>{
    //   //console.log(query);
    //   this.start = query.get('start');
    //   console.log(this.start);
    
    // });
    // this.eventService.getAllAppointments().subscribe((data:any) => {
    this.eventService.getEvents().subscribe(data => {
      this.dayCalendarOptions = {
        defaultDate: this.getDateClicked,
        defaultView: 'agendaDay',
        slotEventOverlap: false,
        allDaySlot: false,
        slotDuration: moment.duration('00:15:00'),
        minTime: moment.duration('08:00:00'),
        maxTime: moment.duration('14:10:00'),
        header: {
          left: 'title',
          center: '',
          right: 'prev,next today'
        },
        events: data,
        selectable: true,
        selectHelper: true
      }
    });
  }

  dayClick(model :any) {
    this.clickedDate = new Date(model.date).toLocaleString('en-US').split(', ');
    
    if(this.clickedDate){
      //console.log(this.clickedDate[0],"enterdayclick");
      if(this.title)
      {
      console.log(this.title);
      
      
      
      }
      console.log("no title entered");
  }
   
  }

  eventClick(model: any) {
    console.log(model);
    
    console.log(model.event.start._d);
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
      },
      duration: {}
    }
    //console.log(model.event._id);
    // const clickedDate = new Date(model.event.start).toLocaleString('en-US').split(', ');
    // this.router.navigate(['/dayCalendar',clickedDate[0]],
    
    //);
  }

}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_service_1 = require("../../services/event.service");
var ng_fullcalendar_1 = require("ng-fullcalendar");
var router_1 = require("@angular/router");
var moment = require("moment");
//import { NewEventService } from '../../services/new-event.service';
var DayCalendarComponent = /** @class */ (function () {
    function DayCalendarComponent(eventService, 
    //private newEventService: NewEventService,
    activatedRoute, router) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.appointmentCreateEventSuccessful = false;
        this.appointmentEditEventSuccessful = false;
    }
    DayCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting route parameter
        this.activatedRoute.paramMap.subscribe(function (params) {
            //console.log(params);
            _this.getDateClicked = params.get('date');
            //console.log(this.getDateClicked);
        });
        this.eventService.getAllAppointments().subscribe(function (data) {
            //console.log(data);
            _this.dayCalendarOptions = {
                defaultDate: _this.getDateClicked,
                defaultView: 'agendaDay',
                slotEventOverlap: false,
                allDaySlot: false,
                header: {
                    left: 'title',
                    center: '',
                    right: 'prev,next today'
                },
                selectable: true,
                selectHelper: true,
                slotDuration: moment.duration('00:30:00'),
                minTime: moment.duration('08:00:00'),
                maxTime: moment.duration('14:10:00'),
                events: data
                //selectable: true,
                // selectHelper: true
            };
        });
    };
    DayCalendarComponent.prototype.OnSubmit = function (title) {
        var _this = this;
        //console.log(title);
        this.start = this.clickedDate.toString();
        this.end = this.clickedDate.toString();
        this.eventService.insertAppointment(title, this.start, this.end).subscribe(function (data) {
            //localStorage.clear();
            //yaha per ek property true karo jisse modal ko hide kar saken
            _this.appointmentCreateEventSuccessful = true;
            localStorage.setItem('appointment', JSON.stringify(data));
            //console.log(localStorage.getItem('appointment'));
            _this.router.navigate(['/homeCalendar']);
            _this.eventService.getAllAppointments().subscribe(function (data) {
                _this.eventService.allAppointments = data;
                //console.log(data);
                //.log(this.eventService.allAppointments);
            });
        });
    };
    // getData(newEvent) {
    //   this.newEvent[1].title = newEvent.title;
    //   console.log(newEvent[1].title);
    // }
    DayCalendarComponent.prototype.getTitle = function (title) {
        //console.log(title);
    };
    DayCalendarComponent.prototype.dayClick = function (model) {
        //this.clickedDate = new Date(model.date).toLocaleString('en-US').split(', ');
        this.clickedDate = new Date(model.date).toLocaleString('en-US', { timeZone: 'UTC' }).split(', ');
        if (this.clickedDate) {
            //console.log(this.clickedDate[0],"enterdayclick");
            if (this.title) {
                //console.log(this.title);
            }
            //console.log("no title entered");
        }
    };
    DayCalendarComponent.prototype.eventClick = function (model) {
        console.log(model);
        //console.log(model.event.start._d);
        if (model != null) {
            this.appointmentEditEventSuccessful = true;
        }
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
            },
            duration: {}
        };
        //console.log(model.event._id);
        // const clickedDate = new Date(model.event.start).toLocaleString('en-US').split(', ');
        // this.router.navigate(['/dayCalendar',clickedDate[0]],
        //);
    };
    __decorate([
        core_1.ViewChild(ng_fullcalendar_1.CalendarComponent),
        __metadata("design:type", ng_fullcalendar_1.CalendarComponent)
    ], DayCalendarComponent.prototype, "ucCalendarDay", void 0);
    DayCalendarComponent = __decorate([
        core_1.Component({
            selector: 'day-calendar',
            templateUrl: './day-calendar.component.html',
            styleUrls: ['./day-calendar.component.css']
        }),
        __metadata("design:paramtypes", [event_service_1.EventService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DayCalendarComponent);
    return DayCalendarComponent;
}());
exports.DayCalendarComponent = DayCalendarComponent;
//# sourceMappingURL=day-calendar.component.js.map
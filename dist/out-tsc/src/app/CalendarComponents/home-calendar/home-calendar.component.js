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
var ng_fullcalendar_1 = require("ng-fullcalendar");
var router_1 = require("@angular/router");
var event_service_1 = require("../../services/event.service");
var user_service_1 = require("../../services/user.service");
var auth_service_1 = require("../../services/auth.service");
var department_service_1 = require("../../services/department.service");
var HomeCalendarComponent = /** @class */ (function () {
    function HomeCalendarComponent(deptService, eventService, router, userService, authService) {
        this.deptService = deptService;
        this.eventService = eventService;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.departmentName = "-1";
        this.events = null;
        //  this.deptService.getAllDepartments().subscribe((data : any)=>
        // {
        //   //console.log("entered getdepartments");
        //   this.departments = data;
        // });
    }
    HomeCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for SuperAdmin
        if (this.authService.roleMatch(['SuperAdmin'])) {
            console.log("entered SuperAdminCondition");
            this.deptService.getAllDepartments().subscribe(function (data) {
                //console.log("entered getdepartments");
                _this.departments = data;
            });
            this.eventService.getAllAppointments().subscribe(function (data) {
                _this.calendarOptions = {
                    editable: true,
                    isRTL: true,
                    locale: "ar-sa",
                    firstDay: 6,
                    eventLimit: false,
                    // buttonIcons: {
                    //   prev: "left-single-arrow",
                    //   next: "right-single-arrow",
                    //   prevYear: "left-double-arrow",
                    //   nextYear: "right-double-arrow"
                    // },
                    dayNamesShort: [
                        "الأحد",
                        "الإثنين",
                        "الثلاثاء",
                        "الأربعاء",
                        "الخميس",
                        "الجمعه",
                        "السبت"
                    ],
                    buttonText: {
                        today: "اليوم",
                        month: "شهر",
                        week: "اسبوع",
                        day: "يوم",
                        list: "قائمة"
                    },
                    header: {
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek"
                    },
                    events: data
                };
            });
        }
        //for admin
        if (this.authService.roleMatch(['Admin'])) {
            console.log("entered AdminCondition");
            this.eventService.getAllAppointments().subscribe(function (data) {
                _this.calendarOptions = {
                    editable: true,
                    isRTL: true,
                    locale: "ar-sa",
                    firstDay: 6,
                    eventLimit: false,
                    // buttonIcons: {
                    //   prev: "left-single-arrow",
                    //   next: "right-single-arrow",
                    //   prevYear: "left-double-arrow",
                    //   nextYear: "right-double-arrow"
                    // },
                    dayNamesShort: [
                        "الأحد",
                        "الإثنين",
                        "الثلاثاء",
                        "الأربعاء",
                        "الخميس",
                        "الجمعه",
                        "السبت"
                    ],
                    buttonText: {
                        today: "اليوم",
                        month: "شهر",
                        week: "اسبوع",
                        day: "يوم",
                        list: "قائمة"
                    },
                    header: {
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek"
                    },
                    events: data
                };
            });
        }
        //for registered user
        if (this.authService.roleMatch(['Registered'])) {
            console.log("entered Registered User Condition");
            this.eventService.getAllAppointments().subscribe(function (data) {
                _this.calendarOptions = {
                    editable: true,
                    isRTL: true,
                    locale: "ar-sa",
                    firstDay: 6,
                    eventLimit: false,
                    // buttonIcons: {
                    //   prev: "left-single-arrow",
                    //   next: "right-single-arrow",
                    //   prevYear: "left-double-arrow",
                    //   nextYear: "right-double-arrow"
                    // },
                    dayNamesShort: [
                        "الأحد",
                        "الإثنين",
                        "الثلاثاء",
                        "الأربعاء",
                        "الخميس",
                        "الجمعه",
                        "السبت"
                    ],
                    buttonText: {
                        today: "اليوم",
                        month: "شهر",
                        week: "اسبوع",
                        day: "يوم",
                        list: "قائمة"
                    },
                    header: {
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek"
                    },
                    events: data
                };
            });
        }
    };
    HomeCalendarComponent.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    HomeCalendarComponent.prototype.dayClick = function (model) {
        var clickedDate = new Date(model).toLocaleString("en-US").split(", ");
        //const clickedDate = new Date(model).split(', ');
        this.router.navigate(["/dayCalendar", clickedDate[0]]);
    };
    HomeCalendarComponent.prototype.eventClick = function (model) {
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
        };
        //console.log(model.event.start);
        var clickedDate = new Date(model.event.start)
            .toLocaleString("en-US")
            .split(", ");
        this.router.navigate(["/dayCalendar", clickedDate[0]]
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
    };
    HomeCalendarComponent.prototype.updateEvent = function (model) {
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
        };
        this.displayEvent = model;
    };
    HomeCalendarComponent.prototype.onDepartmentSelected = function (department) {
        var _this = this;
        console.log("eneter select list function");
        this.eventService.getAllAppointmentsByDepartment(department)
            .subscribe(function (data) {
            console.log(data);
            _this.calendarOptions = {
                editable: true,
                isRTL: true,
                locale: "ar-sa",
                firstDay: 6,
                eventLimit: false,
                // buttonIcons: {
                //   prev: "left-single-arrow",
                //   next: "right-single-arrow",
                //   prevYear: "left-double-arrow",
                //   nextYear: "right-double-arrow"
                // },
                dayNamesShort: [
                    "الأحد",
                    "الإثنين",
                    "الثلاثاء",
                    "الأربعاء",
                    "الخميس",
                    "الجمعه",
                    "السبت"
                ],
                buttonText: {
                    today: "اليوم",
                    month: "شهر",
                    week: "اسبوع",
                    day: "يوم",
                    list: "قائمة"
                },
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,agendaWeek"
                },
                events: data
            };
        });
    };
    __decorate([
        core_1.ViewChild(ng_fullcalendar_1.CalendarComponent),
        __metadata("design:type", ng_fullcalendar_1.CalendarComponent)
    ], HomeCalendarComponent.prototype, "ucCalendar", void 0);
    HomeCalendarComponent = __decorate([
        core_1.Component({
            selector: "home-calendar",
            templateUrl: "./home-calendar.component.html",
            styleUrls: ["./home-calendar.component.css"]
        }),
        __metadata("design:paramtypes", [department_service_1.DepartmentService,
            event_service_1.EventService,
            router_1.Router,
            user_service_1.UserService,
            auth_service_1.AuthService])
    ], HomeCalendarComponent);
    return HomeCalendarComponent;
}());
exports.HomeCalendarComponent = HomeCalendarComponent;
//# sourceMappingURL=home-calendar.component.js.map
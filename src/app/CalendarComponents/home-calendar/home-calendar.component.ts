import { Component, OnInit, ViewChild } from "@angular/core";
import { Options } from "fullcalendar";
import { CalendarComponent } from "ng-fullcalendar";
import { Router } from "@angular/router";
import { EventService } from "../../services/event.service";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
//import { Department } from "../../models/department.model";
import { DepartmentService } from "../../services/department.service";
//import { Events } from "../../models/events.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "home-calendar",
  templateUrl: "./home-calendar.component.html",
  styleUrls: ["./home-calendar.component.css"]
})
export class HomeCalendarComponent implements OnInit {
  //todayDate;
  initialdata: any;
  // allEventData: Events;
  departmentName: string;
  currentUserDepartmentId: string;
  modifiedtext: string;
  departments;
  userId: string;
  userDepartmentId: string;
  //timezone: "UTC";
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  userRole: string;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    private toastrService: ToastrService,
    private deptService: DepartmentService,
    private eventService: EventService,
    private router: Router,
    public userService: UserService,
    public authService: AuthService //private datePipe: DatePipe
  ) {
    setTimeout(() => {
      //console.log("enter constructor");
      
      if (this.authService.roleMatch(["Admin"])) {
        this.currentUserDepartmentId = localStorage.getItem("userDepartmentId");
        this.departmentName = this.currentUserDepartmentId
        console.log(this.departmentName);
      }
      //console.log(this.currentUserDepartmentId);
    }, 2000);
  }

  ngOnInit() {
    this.departmentName = "-1";
    this.deptService.getAllDepartments().subscribe((data: any) => {
      this.departments = data;
      //console.log(data);
    });

    //for SuperAdmin role
    if (this.authService.roleMatch(["SuperAdmin"])) {
      console.log("entered SuperAdminCondition");
      this.onSelectingDepartment(this.departmentName);
    }

    //for admin role
    else if (this.authService.roleMatch(["Admin"])) {
      //console.log("entered Admin User Condition");
      setTimeout(() => {
        //this.onSelectingDepartment(this.currentUserDepartmentId);
        this.onSelectingDepartment(this.departmentName);
      }, 3500);
    }

    //for registered user
    else if (this.authService.roleMatch(["Registered"])) {
      //console.log("entered Registered User Condition");
      // this.onSelectingDepartment(localStorage.getItem("selectedDepartment"));
      this.onSelectingDepartment(this.departmentName);
    }
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }

  dayClick(model: any) 
  {
    if (this.departmentName == '-1') {
      //console.log('enter day click when department value is -1');
      this.toastrService.warning(
        "يرجى اختيار القسم الأول",
        "Select Department",
        {
          positionClass: "toast-top-left"
        }
      );
    }
    else {
     // console.log('enter day click when department value is not -1');

      //get the start date and time
      var clickedDate = new Date(model);
      var clickedDateString = clickedDate.toLocaleString("en-US").split(", ");

      var todayDate = new Date();
      var todayDateString = todayDate.toLocaleString("en-US").split(", ");
      //getting only date part of string
      var clickeddate = clickedDateString[0];
      var todaydate = todayDateString[0];
      if (clickedDate < todayDate) {
        if (clickeddate == todaydate) {
          console.log(this.departmentName);
          this.router.navigate(["/dayCalendar", clickeddate], {
            queryParams: {
              departmentId: this.departmentName
            }
          });
        } else {
          // console.log(
          //   "enter else block of string comparison to show toastr message"
          // );
          this.toastrService.warning(
            "Not Authenticated For This Process",
            "Authentication Warning",
            {
              positionClass: "toast-top-left"
            }
          );
        }
      } else {
        console.log("enter else block to show toastr message");
        this.router.navigate(["/dayCalendar", clickeddate], {
          queryParams: {
            departmentId: this.departmentName
          }
        });
      }
    }
    //this.router.navigate(["/dayCalendar", clickedDate[0]]);
  }

  eventClick(model: any) {
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
    //console.log(model.event.start);
    const clickedDate = new Date(model.event.start)
      .toLocaleString("en-US")
      .split(", ");
    this.router.navigate(
      ["/dayCalendar", clickedDate[0]]
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

  onSelectingDepartment(val: any) {
    if (val == -1) {
      //console.log("enter -1");
      this.eventService.getAllAppointments().subscribe((data: any) => {
        // console.log(data);
        this.calendarOptions = {
          editable: true,
          isRTL: true,
          locale: "ar-sa",
          firstDay: 6,
          eventLimit: true,
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
        if (this.ucCalendar != undefined) {
          this.ucCalendar.eventsModel = data;

          this.ucCalendar.fullCalendar("rerenderEvents");
        }
      });
    } else {
      //console.log("enter not in -1");
      this.eventService
        .getAllAppointmentsByDepartment(val)
        .subscribe((eventdata: any) => {
          //console.log(eventdata);
          this.calendarOptions = {
            editable: true,
            isRTL: true,
            locale: "ar-sa",
            firstDay: 6,
            eventLimit: true,
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

            events: eventdata
          };

          if (this.ucCalendar != undefined) {
            this.ucCalendar.eventsModel = eventdata;

            this.ucCalendar.fullCalendar("rerenderEvents");
          }
        });
    }
  }
}

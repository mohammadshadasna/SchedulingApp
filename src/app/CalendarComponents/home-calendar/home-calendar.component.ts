import { Component, OnInit, ViewChild } from "@angular/core";
import { Options } from "fullcalendar";
import { CalendarComponent } from "ng-fullcalendar";
import { Router } from "@angular/router";
import { EventService } from "../../services/event.service";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { Department } from "../../models/department.model";
import { DepartmentService } from "../../services/department.service";

@Component({
  selector: "home-calendar",
  templateUrl: "./home-calendar.component.html",
  styleUrls: ["./home-calendar.component.css"]
})
export class HomeCalendarComponent implements OnInit {
  departmentName = "-1";
  departments;
  //departments : Department[];
  // departments : Department[] = [
  //   //{id:0,name:'--select department'},
  //   {id : 1,name: 'IT'},
  //   {id : 2,name: 'HR'},
  //   {id : 3,name: 'Rukhas'}
  // ];
  userId: string;
  userDepartmentId: string;
  timezone :"UTC";
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  userRole: string;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  
  constructor(
    private deptService : DepartmentService,
    private eventService: EventService,
    private router: Router,
    private userService: UserService,
    private authService : AuthService
  ) {
    //  this.deptService.getAllDepartments().subscribe((data : any)=>
    // {
    //   //console.log("entered getdepartments");
    //   this.departments = data;
    // });
  }

  ngOnInit() {
    //for SuperAdmin
    if(this.authService.roleMatch(['SuperAdmin'])){
      console.log("entered SuperAdminCondition");
      this.deptService.getAllDepartments().subscribe((data : any)=>
    {
      //console.log("entered getdepartments");
      this.departments = data;
    });
    if(this.departments != null && this.departments == "0"){
      this.eventService.getAllAppointments().subscribe((data: any) => {
        this.calendarOptions = {
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
     else{
      this.onDepartmentSelected(this.departments);
    //}
    }
    // this.eventService.getAllAppointments().subscribe((data:any) => {
    //   this.calendarOptions = {
    //     editable: true,
    //     isRTL: true,
    //     locale: "ar-sa",
    //     firstDay: 6,
    //     eventLimit: false,
    //     // buttonIcons: {
    //     //   prev: "left-single-arrow",
    //     //   next: "right-single-arrow",
    //     //   prevYear: "left-double-arrow",
    //     //   nextYear: "right-double-arrow"
    //     // },
    //     dayNamesShort: [
    //       "الأحد",
    //       "الإثنين",
    //       "الثلاثاء",
    //       "الأربعاء",
    //       "الخميس",
    //       "الجمعه",
    //       "السبت"
    //     ],
    //     buttonText: {
    //       today: "اليوم",
    //       month: "شهر",
    //       week: "اسبوع",
    //       day: "يوم",
    //       list: "قائمة"
    //     },
    //     header: {
    //       left: "prev,next today",
    //       center: "title",
    //       right: "month,agendaWeek"
    //     },
    //     events: data
    //   };
    //});
  }

  //for admin
  if(this.authService.roleMatch(['Admin'])){
    console.log("entered AdminCondition");
    this.eventService.getAllAppointments().subscribe((data:any) => {
      console.log(data);
      this.calendarOptions = {
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
  if(this.authService.roleMatch(['Registered'])){
    console.log("entered Registered User Condition");
    this.eventService.getAllAppointments().subscribe((data:any) => {
      this.calendarOptions = {
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
    
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }

  dayClick(model: any) {
    const clickedDate = new Date(model).toLocaleString("en-US").split(", ");
    //const clickedDate = new Date(model).split(', ');
    this.router.navigate(["/dayCalendar", clickedDate[0]]);
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
    };
    this.displayEvent = model;
  }

  onDepartmentSelected(department){
    console.log("eneter select list function");
    this.eventService.getAllAppointmentsByDepartment(department)
    .subscribe((eventdata : any)=>{
      console.log(eventdata);
      this.calendarOptions = {
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
        events: eventdata
      };
    });
  }
}

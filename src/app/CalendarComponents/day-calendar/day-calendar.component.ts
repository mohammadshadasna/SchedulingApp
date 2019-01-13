import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Options } from "fullcalendar";
import { EventService } from "../../services/event.service";
import { CalendarComponent } from "ng-fullcalendar";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { NewEvent } from "../../models/newEvent";
import { DepartmentService } from "../../services/department.service";
import { Events } from "../../models/events.model";
import { AuthService } from "../../services/auth.service";
import { ToastrService } from "ngx-toastr";
//import { NewEventService } from '../../services/new-event.service';

@Component({
  selector: "day-calendar",
  templateUrl: "./day-calendar.component.html",
  styleUrls: ["./day-calendar.component.css"]
})
export class DayCalendarComponent implements OnInit {
  currentUserId: string;
  userEvent: Events;
  //userEvent={};
  departments: string[];
  //departmentName: string;
  appointmentId: number;
  title: string;
  start: string;
  end: string;
  //currentStart: string;
  description: string;
  departmentFor: string;
  backgroundColor: string;
  userId: string;
  newEvent: NewEvent;
  clickedDate: string[];
  startDate: string[];
  endDate: string[];
  appointmentCreateEventSuccessful: boolean = false;
  appointmentEditEventSuccessful: boolean = false;
  getDateClicked: string; //property holding parameters coming from home calendar
  getDepartmentId: string; //property holding department Id coming from home calendar
  dayCalendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendarDay: CalendarComponent;

  constructor(
    private toastrService: ToastrService,
    private deptService: DepartmentService,
    private eventService: EventService,
    private authService: AuthService,
    //private newEventService: NewEventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    //localStorage.setItem('userId', this.userClaims.UserId);
    this.currentUserId = localStorage.getItem("userId");
    console.log(this.currentUserId);
    this.userEvent = {
      id: "",
      userId: "",
      title: "",
      start: null,
      end: null,
      backgroundColour: "",
      description: "",
      departmentId: ""
    };
  }

  ngOnInit() {
    //this.departmentName = "-1";
    //this.currentStart = "";

    //for getting all departments in modal dropdown
    // this.deptService.getAllDepartments().subscribe((data: any) => {
    //   this.departments = data;
    //   //console.log(data);
    // });

    //getting required parameter from the route
    this.activatedRoute.paramMap.subscribe(params => {
      this.getDateClicked = params.get("date");
    });

    //getting query parameters from the route
    this.activatedRoute.queryParamMap.subscribe(queryPrams => {
      this.getDepartmentId = queryPrams.get("departmentId");
      //console.log(this.getDepartmentId);
    });

    //for getting department details
    this.deptService
      .getDepartmentDetails(this.getDepartmentId)
      .subscribe((data: any) => {
        this.departments = data;
        //console.log(data + "department data");
      });

    //loading calender and filling all appointments by departments
    this.eventService
      .getAllAppointmentsByDepartment(this.getDepartmentId)
      .subscribe((eventdata: any) => {
        //console.log(eventdata);
        this.dayCalendarOptions = {
          //
          editable: true,
          isRTL: true,
          locale: "ar-sa",
          buttonText: {
            today: "اليوم"
          },
          defaultDate: this.getDateClicked,
          defaultView: "agendaDay",
          slotEventOverlap: false,
          allDaySlot: false,
          header: {
            left: "prev,next today",
            center: "title",
            right: ""
          },
          selectable: true,
          selectHelper: true,
          slotDuration: moment.duration("00:30:00"),
          minTime: moment.duration("08:00:00"),
          maxTime: moment.duration("14:10:00"),

          events: eventdata
        };

        if (this.ucCalendarDay != undefined) {
          this.ucCalendarDay.eventsModel = eventdata;

          this.ucCalendarDay.fullCalendar("rerenderEvents");
        }
      });
  }

  confirmDelete() {
    if (confirm("هل أنت متأكد من حذف الموقع ؟")) {
      this.appointmentId = parseInt(this.userEvent.id);
      this.eventService
        .deleteAppointment(this.appointmentId)
        .subscribe((data: any) => {
          //render calendar after delete
          this.ucCalendarDay.fullCalendar("refetchEvents");
          //
          this.toastrService.success("عملية ناجحة", "Cancel Appointment", {
            positionClass: "toast-top-left"
          });
          // navigating after user deletes his appointment
          this.router.navigate(['/homeCalendar']);
          //}
          // else {
          //   this.toastrService.error(data.Errors[0]);
          // }
        });
      //alert("Done.");
      this.appointmentEditEventSuccessful = !this
        .appointmentEditEventSuccessful;
    } else {
      //alert("No.");
      this.appointmentEditEventSuccessful = !this
        .appointmentEditEventSuccessful;
    }
  }

  OnEditSubmit(title: string, description: string) {
    this.userId = this.userEvent.userId;
    this.departmentFor = this.getDepartmentId;
    //console.log(this.departmentFor);
    this.appointmentId = parseInt(this.userEvent.id);

    this.eventService
      .updateAppointment(
        this.appointmentId,
        title,
        this.userEvent.backgroundColour,
        description,
        this.departmentFor,
        this.userId
      )
      .subscribe((data: any) => {
        //console.log(data);
        this.appointmentEditEventSuccessful = false;
        this.ucCalendarDay.fullCalendar(
          "renderEvent",
          {
            title: data[0].title,
            start: data[0].start,
            end: data[0].end,
            backgroundColor: data[0].backgroundColor
          },
          true
        );
        this.toastrService.success("تم تأكيد الموعد", "Appointment Confirmed", {
          positionClass: "toast-top-left"
        });
        this.router.navigate(['/homeCalendar']);
      });
  }

  OnSubmit(title: string, description: string) {
    this.start = this.startDate.toString();
    this.end = this.endDate.toString();
    this.departmentFor = this.getDepartmentId;
    //console.log(this.departmentFor);
    this.userId = localStorage.getItem("userId");
    //console.log(this.userId);
    this.eventService
      .insertAppointment(
        title,
        this.start,
        this.end,
        description,
        this.departmentFor,
        this.userId
      )
      .subscribe((data: any) => {    
        //yaha per ek property true karo jisse modal ko hide kar saken
        this.appointmentCreateEventSuccessful = true;

        //this.router.navigate(["/homeCalendar"]);
        // debugger;
        //console.log(data + "submit insert event");
        this.ucCalendarDay.fullCalendar(
          "renderEvent",
          {
            title: data.appointmentTitle,
            start: data.appointmentStartDate,
            end: data.appointmentEndDate,
            userId: data.userId
            //backgroundColor: data.appointmentbgcolour
          },
          true
        );
        this.toastrService.success("طلب موعد ناجح", "Create Appointment", {
          positionClass: "toast-top-left"
        });
        // this.eventService.getAllAppointments().subscribe((data: any) => {

        // });
      });
    //this.router.navigate(['/homeCalendar']);
  }

  dayClick(model: any) {
    //get the start date and time
    this.startDate = new Date(model.date)
      .toLocaleString("en-US", { timeZone: "UTC" })
      .split(", ");

    //get the end date and time by adding 30 minutes
    var clicked = new Date(model.date);
    var newDateObj = moment(clicked)
      .add(30, "m")
      .toDate();
    this.endDate = new Date(newDateObj)
      .toLocaleString("en-US", { timeZone: "UTC" })
      .split(", ");

    //end of adding 30 minutes

    //console.log(newDateObj);

    //console.log(this.startDate + "start date");
    //console.log(this.endDate + "end date");
  }

  eventClick(model: any) {
    if (
      this.authService.roleMatch(["SuperAdmin"]) ||
      this.authService.roleMatch(["Admin"])
    ) {
      //console.log("admin or super admin");
      if (model != null) {
        this.userEvent.id = model.event.id;
        this.userEvent.title = model.event.title;
        this.userEvent.start = model.event.start;
        // console.log(this.userEvent.start + "user event");
        // console.log(model.event.start + "model ");
        // console.log(model + "model");
        this.userEvent.end = model.event.end;
        this.userEvent.description = model.event.description;
        this.userEvent.userId = model.event.userId;
        this.userEvent.backgroundColour = "LimeGreen";
        this.userEvent.departmentId = model.event.departmentFor;
        //this.departmentName = model.event.departmentId;
        this.appointmentEditEventSuccessful = true;
      }
    } else if (model.event.userId === this.currentUserId) {
      //console.log("current user condition");
      if (model != null) {
        this.userEvent.id = model.event.id;
        this.userEvent.userId = model.event.userId;
        this.userEvent.start = model.event.start;
        this.userEvent.end = model.event.end;
        this.userEvent.title = model.event.title;
        this.userEvent.departmentId = model.event.departmentFor;
        //this.departmentName = model.event.departmentId;
        this.userEvent.description = model.event.description;
        this.appointmentEditEventSuccessful = true;
      }
    } else {
      //console.log(this.currentUserId);
      //console.log("toaster message showing condition");
      this.toastrService.warning(
        "Not Authenticated For This Process",
        "Authentication Warning",
        {
          positionClass: "toast-top-left"
        }
      );
      //console.log("not sa");
    }
  }
 

}

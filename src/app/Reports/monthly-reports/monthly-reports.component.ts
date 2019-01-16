import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoggedIn } from "../../models/logged-in.model";
import { UserService } from "../../services/user.service";
import { EventService } from "../../services/event.service";
import { Subscription } from "rxjs";
import { DepartmentService } from "../../services/department.service";
import { ReportService } from "../../services/report.service";

@Component({
  selector: "app-monthly-reports",
  templateUrl: "./monthly-reports.component.html",
  styleUrls: ["./monthly-reports.component.css"]
})
export class MonthlyReportsComponent implements OnInit, OnDestroy {
  appointments: { AppointmentTitle: string }[];
  filteredAppointments: any[];
  subscription: Subscription;
  departmentId: string;
  departments;
  rowsOnPageSet:number;
  constructor(
    private userService: UserService,
    private eventService: EventService,
    private deptService: DepartmentService,
    private reportService: ReportService
  ) {
    // this.subscription = this.eventService
    //   .getAllAppointmentsByDepartment("1")
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     this.filteredAppointments = this.appointments = data;
        
    //   });
  }

  ngOnInit() {
    //to get all departments
    this.departmentId = "-1";
    this.deptService.getAllDepartments().subscribe((data: any) => {
      //console.log(data);
      this.departments = data;
      this.onSelectingDepartment(this.departmentId);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showForEdit(user: LoggedIn) {
    this.userService.loggedInUser = Object.assign({}, user);
  }

  filter(query: string) {
    //console.log(this.appointments);
    this.filteredAppointments = query
      ? this.appointments.filter(appointment =>
          //appointment.UserName.toLowerCase().includes(query.toLowerCase()),
          appointment.AppointmentTitle.toLowerCase().includes(query.toLowerCase())
        )
      : this.appointments;
  }

  onSelectingDepartment(val: any) {
    if (val == -1) {
      //console.log('enter condition -1');
      this.subscription=this.reportService.getAllAppointments().subscribe((Appointmentsdata: any) => {
        //console.log(Appointmentsdata);
        this.filteredAppointments = this.appointments = Appointmentsdata;
      });
    }
    else{
      this.subscription=this.reportService.getAllAppointmentsByDepartment(val).subscribe((Appointmentsdata:any)=>{
        this.filteredAppointments = this.appointments = Appointmentsdata;
        //console.log(Appointmentsdata);
      });
    }
  }
}

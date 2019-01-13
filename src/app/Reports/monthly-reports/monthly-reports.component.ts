import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoggedIn } from "../../models/logged-in.model";
import { UserService } from "../../services/user.service";
import { EventService } from "../../services/event.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-monthly-reports",
  templateUrl: "./monthly-reports.component.html",
  styleUrls: ["./monthly-reports.component.css"]
})
export class MonthlyReportsComponent implements OnInit, OnDestroy {
  appointments: { title: string }[];
  filteredAppointments: any[];
  subscription: Subscription;
  constructor(
    private userService: UserService,
    private eventService: EventService
  ) {
    this.subscription = this.eventService
      .getAllAppointmentsByDepartment("1")
      .subscribe((data: any) => {
        console.log(data);
        this.filteredAppointments = this.appointments = data;
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showForEdit(user: LoggedIn) {
    this.userService.loggedInUser = Object.assign({}, user);
  }

  filter(query: string) {
    this.filteredAppointments = query
      ? this.appointments.filter(appointment =>
          //appointment.userName.toLowerCase().includes(query.toLowerCase())
          appointment.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.appointments;
  }
}

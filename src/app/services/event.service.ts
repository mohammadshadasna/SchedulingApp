import { Injectable } from "@angular/core";
//import { Observable,of } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders
} from "@angular/common/http";
import { NewEvent } from "../models/newEvent";
import { Observable, of, throwError } from "rxjs";
import { Appointment } from "../models/appointment.model";
//import { catchOperator } from 'rxjs/operator';

@Injectable({
  providedIn: "root"
})
export class EventService {
  //-----------------------properties--------------------
  rootUrl = "http://localhost:1844";
  //allAppointments: Observable<Object>;
  userId;
  selectedAppointment: Appointment;
  //renderedAppointments : NewEvent[];

  //---------------------------helper methods---------------
  constructor(private httpClient: HttpClient) {}

  //----------------------http methods-------------------------
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error:", errorResponse.error.message);
    } else {
      console.error("Server Side Error:", errorResponse);
    }
    return throwError(
      "There is a problemwith the service. We are notified & working on it.Please try again later."
    );
  }

  public insertAppointment(
    title: string,
    start: string,
    end: string,
    description: string,  
    departmentFor: string,
    UserId: string
  ) {
    var body = {
      appointmentTitle: title,
      appointmentStartDate: start,
      appointmentEndDate: end,
      appointmentDescription: description,
      appointmentDepartmentId: departmentFor,
      userId: UserId
    };
    return this.httpClient.post(
      this.rootUrl + "/api/InsertAppointmentData",
      body
    );
    //.pipe(new  RTCError(this.handleError));
  }

  public deleteAppointment(
    appointmentId: number
    //,
    //appointmentCancelReason : string
  ) {
    var body = {
      Id: appointmentId
      //,
      //appointmentDescription: appointmentCancelReason
    };
    return this.httpClient.post(this.rootUrl + "/api/DeleteAppointment", body);
  }

  public updateAppointment(
    appointmentId: number,
    title: string,
    //start: string,
    //end: string,
    backgroundColor: string,
    description: string,
    departmentFor: string,
    UserId: string
  ) {
    var body = {
      appointmentTitle: title,
      //appointmentStart: start,
      //appointmentEnd: end,
      appointmentBGColor: backgroundColor,
      appointmentDescription: description,
      appointmentDepartmentId: departmentFor,
      userId: UserId,
      Id: appointmentId
    };
    console.log(body);
    //var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.httpClient.post(
      this.rootUrl + "/api/UpdateAppointmentData",
      body
    );
  }

  public getAllAppointments() {
    return this.httpClient.get(this.rootUrl + "/api/getAllAppointments");
  }

  public getAllAppointmentsByDepartment(department: string) {
    console.log("eneter select list web service");

    //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2);
    let params = new HttpParams().set("departmentId", department);
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-urlencoded"
    });

    return this.httpClient.get(
      this.rootUrl + "/api/getAllAppointmentsByDepartmentId",
      { headers: reqHeader, params: params }
    );
  }

  public getAllAppointmentsByUserId(user) {
    setTimeout(() => {
      this.userId = JSON.stringify(localStorage.getItem("userId"));
      console.log(this.userId);
    }, 5);
    return this.httpClient.get(
      this.rootUrl + "/api/getAllAppointmentsByUserId"
    );
  }

  //   public getEvents(): Observable<any> {
  //     const dateObj = new Date();
  //     const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  //     let data: any = [{
  //         title: 'All Day Event',
  //         start: yearMonth + '-01'
  //     },
  //     {
  //         title: 'Long Event',
  //         start: yearMonth + '-07',
  //         end: yearMonth + '-10'
  //         //background-color:#FF0000
  //     },
  //     {
  //         id: 999,
  //         title: 'Repeating Event',
  //         start: yearMonth + '-09T16:00:00',
  //         backgroundColor: 'red'
  //     },
  //     {
  //         id: 999,
  //         title: 'Repeating Event',
  //         start: yearMonth + '-16T16:00:00'
  //     },
  //     {
  //         title: 'Conference',
  //         start: yearMonth + '-11',
  //         end: yearMonth + '-13'
  //     },
  //     {
  //         title: 'Meeting',
  //         start: yearMonth + '-12T10:30:00',
  //         end: yearMonth + '-12T12:30:00'
  //     },
  //     {
  //         title: 'Lunch',
  //         start: yearMonth + '-12T12:00:00'
  //     },
  //     {
  //         title: 'Meeting',
  //         start: yearMonth + '-12T14:30:00'
  //     },
  //     {
  //         title: 'Happy Hour',
  //         start: yearMonth + '-12T17:30:00'
  //     },
  //     {
  //         title: 'Dinner',
  //         start: yearMonth + '-12T20:00:00'
  //     },
  //     {
  //         title: 'Birthday Party',
  //         start: yearMonth + '-13T07:00:00'
  //     },
  //     {
  //         title: 'Click for Google',
  //         url: 'http://google.com/',
  //         start: yearMonth + '-28'
  //     }];
  //     //return Observable.of(data)
  //     return of(data)
  // }
}

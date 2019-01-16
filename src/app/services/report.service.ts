import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  rootUrl = "http://localhost:1844";
  constructor(
    private httpClient :HttpClient
  ) { }

  public getAllAppointments() {
    return this.httpClient.get(this.rootUrl + "/api/Reports_getAllAppointments");
  }

  public getAllAppointmentsByDepartment(department: string) {
    console.log("eneter select list web service");

    //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2);
    let params = new HttpParams().set("departmentId", department);
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-urlencoded"
    });

    return this.httpClient.get(
      this.rootUrl + "/api/Reports_getAllAppointmentsByDepartmentId",
      { headers: reqHeader, params: params }
    );
  }
}

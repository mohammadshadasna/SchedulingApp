import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  rootUrl = 'http://localhost:1844';
 // allDepartments;

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllDepartments(){
    return this.httpClient.get(this.rootUrl + '/api/getDepartments');
  }

  getDepartmentDetails(
    departmentId : string
  ){
    var body={
      Id : departmentId
    }
    return this.httpClient.post(
      this.rootUrl + "/api/getDepartmentDetails",
      body
    );
  }
}

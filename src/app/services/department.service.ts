import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}

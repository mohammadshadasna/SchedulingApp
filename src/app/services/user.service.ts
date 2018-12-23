import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Response} from '@angular/http';
//import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 readonly rootUrl = 'http://localhost:1844'; 

  constructor(private httpClient : HttpClient) { }

  registerUser(user : User){
    const body: User = {
      UserName: user.UserName,
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.httpClient.post(this.rootUrl + '/api/User/Register',body);
  }

  userAuthentication(userName,password){
    var data = "username="+userName+"&password="+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.httpClient.post(this.rootUrl+'/token',data,{headers:reqHeader});
  }
}

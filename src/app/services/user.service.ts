import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import {Response} from '@angular/http';
//import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from "../models/user.model";
import { Observable, BehaviorSubject } from "rxjs";
// import {map} from 'rxjs/operator';
import { LoggedIn } from "../models/logged-in.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  loggedInUser: LoggedIn;
  userClaims$: Observable<User>;

  readonly rootUrl = "http://localhost:1844";

  constructor(private httpClient: HttpClient) {}

  registerUser(user: User, roles: string) {
    const body: User = {
      UserName: user.UserName,
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles: roles
    };
    //when using interceptors
    //var reqHeader = new HttpHeaders({'No-Auth':'True'});
    //return this.httpClient.post(this.rootUrl + '/api/User/Register',body,{headers : reqHeader});
    return this.httpClient.post(this.rootUrl + "/api/User/Register", body);
  }

  userAuthentication(userName, password) {
    var data =
      "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-urlencoded"
    });
    return this.httpClient.post(this.rootUrl + "/token", data, {
      headers: reqHeader
    });
  }

  getUserClaims() {
    return this.httpClient.get(this.rootUrl + "/api/GetUserClaims", {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("userToken")
      })
    });
    //.map((response: Response) => <User>response.json());
  }

  updateUser(user: LoggedIn) {
    var body = JSON.stringify(user);
    var headerOptions = new Headers({ "Content-Type": "application/json" });
    //var requestOptions = new Request({method : requestMe})
    return this.httpClient.post(this.rootUrl + "/api/User/Register", body);
    //.pipe(map(({LoggedIn})));
  }

  putUser(id, user) {
    var body = JSON.stringify(user);
  }
}

import { Injectable} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//import { User } from '../models/user.model';
//import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userClaims : any;
  userClaims$ : Observable<Object> ;
  readonly rootUrl = 'http://localhost:1844';

  constructor(private httpClient : HttpClient,
              private router : Router) {
   
   }

  login(userName : string,password : string){
    var data = "username="+userName+"&password="+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.httpClient.post(this.rootUrl+'/token',data,{headers:reqHeader});
    // this.userClaims$ = this.httpClient.post(this.rootUrl+'/token',data,{headers:reqHeader});
    // this.getUserCredentials();
    // return this.userClaims$;
  }

  logout(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userCredentials');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.clear();//remove all key-value pairs from localstorage
    //setti
    this.router.navigate(['/']);
  }

  getUserClaims(){
    return this.httpClient.get(this.rootUrl+'/api/GetUserClaims',
    {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
    //.map((response: Response) => <User>response.json());
    //return this.httpClient.get(this.rootUrl+'/api/GetUserClaims');
    //,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
    
    
  }

  getUserCredentials(){
    this.getUserClaims().subscribe((data : any)=>{
      // if(data != null){
      //   console.log("entered getUserClaims");
        this.userClaims = data;
         if(this.userClaims.UserName && this.userClaims.UserId)
         {
           // console.log("entered getUserClaims" + this.userClaims.UserName +"and setting local storage");
           localStorage.setItem('username', this.userClaims.UserName);
           localStorage.setItem('userId', this.userClaims.UserId);
           localStorage.setItem('userDepartmentId',this.userClaims.DepartmentId)
           //console.log(this.userClaims.UserId, this.userClaims.UserName);
           //}
           localStorage.setItem('userCredentials', this.userClaims);
         }
      // else{
        //var userCredentials = localStorage.getItem('userCredentials')
       //console.log(userCredentials);
      // }
        //cast = this.userClaims.asobser 
        //var userName = JSON.stringify(localStorage.getItem('userId'));
        //console.log(userName);
    });
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    //debugger;
    if (userRoles != null) {
      allowedRoles.forEach(element => {
        if (userRoles.indexOf(element) > -1) {
          isMatch = true;
          return false;
        }
      });
    }
    return isMatch;
  }

    getAllRoles(){
      var reqHeader = new HttpHeaders({'No-Auth':'True'});
      return this.httpClient.get(this.rootUrl + '/api/GetAllRoles',{headers: reqHeader});
    }

    subscribeUserDetails(){
      return this.httpClient.get(this.rootUrl + '/api/getUserDetails');
    }
    getUserDetails(){
      this.subscribeUserDetails().subscribe((data:any)=>{

        this.userClaims = data;
        console.log(data +"getUserDetails");
        if(this.userClaims.UserName && this.userClaims.UserId)
         {
           // console.log("entered getUserClaims" + this.userClaims.UserName +"and setting local storage");
           localStorage.setItem('username', this.userClaims.UserName);
           localStorage.setItem('userId', this.userClaims.UserId);
           localStorage.setItem('userDepartmentId',this.userClaims.DepartmentId)
           //console.log(this.userClaims.UserId, this.userClaims.UserName);
           //}
           localStorage.setItem('userCredentials', this.userClaims);
         }
      });

    }

    

}

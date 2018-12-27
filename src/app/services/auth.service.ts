import { Injectable} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
//import { User } from '../models/user.model';
//import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userClaims : any;
  //private userClaims : any = new BehaviorSubject<any>('');
  //cast = this.userClaims.asObservable();
  userClaims$ : Observable<Object> ;
  readonly rootUrl = 'http://localhost:1844';

  constructor(private httpClient : HttpClient) {
   
   }

  //  ngOnChanges() {
  //   if(localStorage.getItem('userToken')){
  //     console.log("entered into authservice constructor if condition");
  //     this.getUserCredentials();
      
  //   }
  //   console.log("not entered into authservice constructor if condition");
  //  }

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
    localStorage.clear();//remove all key-value pairs from localstorage
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
        this.userClaims = data;
        localStorage.setItem('userCredentials',this.userClaims);
        //cast = this.userClaims.asobser 
        //console.log(this.userClaims);
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

}

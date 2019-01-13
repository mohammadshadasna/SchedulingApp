import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginUser } from "../../models/loginUser.model";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  signIn = true;
  user$;
  user = {};
  loginUser: LoginUser;
  userClaims: any;
  isLoginError: boolean = false;
  isLoading: boolean = false;

  constructor(
    // private userService : UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginUser = new LoginUser("", "");
  }

  ngOnInit() {}

  OnSubmit(username: string, password: string) {
    //var userdata : string;
    // this.userService.userAuthentication(username,password).subscribe((data : any)=>{
    this.isLoading = true;
    this.authService.login(username, password).subscribe(
      (data: any) => {
        //console.log(data.role +'onsubmit');
        //userdata = JSON.stringify(data);
        //this.isLoading = false;
        localStorage.setItem("userToken", data.access_token);
        localStorage.setItem("userRoles", data.role);
        this.authService.getUserCredentials();
        this.isLoading = false;
        //this.authService.getUserDetails();
        //if (this.authService.roleMatch(["Registered"])) {
          //if (data.role == ["Registered"]) {
          //console.log("enteryes");
          //this.router.navigate(["/selectDepartment"]);
        //} else {
          this.router.navigate(["/homeCalendar"]);
        //}

        //neeche ka code tab use karenge jab index page design kar liye honge
        // console.log(data.role);
        // if(this.authService.roleMatch(['SuperAdmin']))

        // {
        //     this.router.navigate(['/homeCalendar']);
        // }
        // else{
        // this.router.navigate(['/index']);
        // }
      },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.isLoginError = true;
      }
    );
    // console.log(userdata);
  }
}

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
  loginUser: LoginUser;
  userClaims: any;
  isLoginError: boolean = false;

  constructor(
    // private userService : UserService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginUser = new LoginUser("", "");
  }

  ngOnInit() {
    // this.authService.getUserClaims().subscribe((data : any)=>{
    //     this.userClaims = data;
    // });
  }

  // getUserCredentials(){
  //     // this.userService.getUserClaims().subscribe((data : any)=>{
  //         this.authService.getUserClaims().subscribe((data : any)=>{
  //         this.userClaims = data;
  //         localStorage.setItem('userCredentials',this.userClaims);
  //         console.log(this.userClaims);
  //     });
  // }

  OnSubmit(username: string, password: string) {
    // this.userService.userAuthentication(username,password).subscribe((data : any)=>{
    this.authService.login(username, password).subscribe(
      (data: any) => {
        localStorage.setItem("userToken", data.access_token);
        localStorage.setItem("userRoles", data.role);
        this.router.navigate(["/homeCalendar"]);
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
        this.isLoginError = true;
      }
    );
  }
}

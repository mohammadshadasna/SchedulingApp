import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import { UserService } from '../../services/user.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent implements OnInit {
  Date = new Date();
  userName: string;
  userClaims: any;
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    //private userService : UserService,
    public authService: AuthService
  ) {
    // if (localStorage.getItem('userToken') != null) {
    //   this.isLoggedIn = true;
    //   if (localStorage.getItem('userCredentials') != null) {
    //     //   console.log("entered loop");
    //     this.userName = JSON.stringify(localStorage.getItem('username'));
    //   }
    //   // else{
    //   // console.log("not entered loop");
    //   // }
    // }
  }

  ngOnInit() {
    if (localStorage.getItem("userToken") != null) {
      this.isLoggedIn = true;
      setTimeout(() => {
        this.userName = JSON.stringify(localStorage.getItem("username"));
        console.log(this.userName);
      }, 500);

      //this.userName = JSON.stringify(localStorage.getItem('username'));
    }

    // if (localStorage.getItem('userToken') != null) {
    //   this.authService.getUserClaims().subscribe((data: any) => {
    //     this.userClaims = data;
    //     this.isLoggedIn = true;
    //   });

    // }
  }

  Logout() {
    // localStorage.removeItem('userToken');
    // localStorage.removeItem('userCredentials');
    this.authService.logout();
    //this.router.navigate(['/']);
  }
}

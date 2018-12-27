import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
//import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  Date = new Date();
  userClaims: any;
  isLoggedIn : boolean = false;
  constructor(private router: Router,
    //private userService : UserService,
    public authService: AuthService) {
  }

  ngOnInit() {
    // this.authService.cast.subscribe((data : any)=>{
    //   this.userClaims = data;
    //   console.log(this.userClaims);
    // });
    // if(this.userClaims){
    //   this.isLoggedIn = true;
    // }
    if(localStorage.getItem('userToken')!= null){
    this.authService.getUserClaims().subscribe((data : any)=>{
      this.userClaims = data;
      this.isLoggedIn = true;
      //console.log(this.userClaims);
    });
    // if(this.userClaims){
    //      this.isLoggedIn = true;
    //   }
  }
    // if (this.authService.roleMatch(['SuperAdmin']) || this.authService.roleMatch(['SuperAdmin'])) {

    // }
  }



  Logout() {
    // localStorage.removeItem('userToken');
    // localStorage.removeItem('userCredentials');
    this.authService.logout();
    this.router.navigate(['/']);
  }

}

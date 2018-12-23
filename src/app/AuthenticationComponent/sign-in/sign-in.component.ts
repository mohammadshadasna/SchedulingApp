import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUser } from '../../models/loginUser.model';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    loginUser : LoginUser
    isLoginError : boolean = false;
    // loginForm: FormGroup;
    // loading = false;
    // submitted = false;
    // returnUrl: string;

    constructor(
        private userService : UserService,
        // private formBuilder: FormBuilder,
        // private route: ActivatedRoute,
         private router: Router,
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) {
            this.loginUser = new LoginUser('','');
        }

    ngOnInit() {
        // this.loginForm = this.formBuilder.group({
        //     username: ['', Validators.required],
        //     password: ['', Validators.required]
        // });

        // // reset login status
        // //this.authenticationService.logout();

        // // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    OnSubmit(username,password){
        this.userService.userAuthentication(username,password).subscribe((data : any)=>{
        localStorage.setItem('userToken',data.access_token);
        this.router.navigate(['/homeCalendar']);
        },
        (err : HttpErrorResponse)=>{
            this.isLoginError = true;
        });
    }

    // convenience getter for easy access to form fields
    // get f() { return this.loginForm.controls; }

    // onSubmit() {
    //     this.submitted = true;

    //     // stop here if form is invalid
    //     if (this.loginForm.invalid) {
    //         return;
    //     }

        //this.loading = true;
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
   // }

}

import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern =
    "^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$";
  roles: any[];
  isLoading: boolean = false;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.user = new User("", "", "", "", "", "", "");
  }

  ngOnInit() {
    this.resetForm();
    this.authService.getAllRoles().subscribe((data: any) => {
      data.forEach(obj => (obj.selected = false));
      this.roles = data;
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.user = {
      UserName: "",
      Password: "",
      ConfirmPassword: "",
      Email: "",
      FirstName: "",
      LastName: "",
      //Roles: []
      Roles: ""
    };
  }

  OnSubmit(form: NgForm) {
    //console.log(form);
    //var roles = this.roles.filter(x=> x.selected).map(y => y.Name);
    let roles: string = "Registered";
    this.isLoading = true;
    this.userService.registerUser(form.value, roles).subscribe((data: any) => {
      if (data.Succeeded == true) {
        this.isLoading = false;
        this.resetForm(form);
        this.toastrService.success("user registration successfull", "", {
          positionClass: "toast-top-left"
        });
        this.router.navigate(["/"]);
      } else {
        this.toastrService.error(data.Errors[0]);
      }
    });
  }

  // log(x){
  //   console.log(x);
  // }
}

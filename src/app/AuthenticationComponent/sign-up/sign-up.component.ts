import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  emailPattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";

  constructor(private userService : UserService, private toastrService : ToastrService) {
    this.user = new User('','','','','','');
   }

   

  ngOnInit() {
    this.resetForm();
    
    }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      ConfirmPassword:'',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }

  OnSubmit(form: NgForm) {
    console.log(form);
   this.userService.registerUser(form.value)
   .subscribe((data : any)=>{
     if(data.Succeeded == true)
     {
     this.resetForm(form);
     this.toastrService.success('user registration successfull');
    }
    else{
      this.toastrService.error(data.Errors[0]);
    }
   })
   ;
  }

    log(x){
      console.log(x);
    }


   
  }



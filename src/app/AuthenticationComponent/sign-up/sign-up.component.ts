import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:User;
  emailPattern = "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";

  constructor() {
    this.user = new User('','','','','');
   }

  ngOnInit() {
    this.resetForm();
    
    }

    log(x){
      console.log(x);
    }


    resetForm(form? : NgForm){
      if(form != null)
      form.reset();
      this.user = {
        UserName:'',
        Password:'',
        Email:'',
        FirstName:'',
        LastName:''
      }
    }
  }



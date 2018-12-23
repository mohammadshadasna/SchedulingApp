import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {

    //defining formgrups and formcontrols using formBuilder class
    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.required],
      email: ['']
      // skills: this.formBuilder.group({
      //   skillName: [''],
      //   experienceInYears: [''],
      //   proficiency: ['beginner']
      // })
    });


    //defining formgrups and formcontrols explicitly
    // this.registerForm = new FormGroup({
    //   userName: new FormControl(),
    //   email: new FormControl(),
    //   skills: new FormGroup({
    //     skillName: new FormControl(),
    //     experienceInYears: new FormControl(),
    //     proficiency: new FormControl()
    //   })
      // password: new FormControl(),
      // confirmPassword: new FormControl(),
      // firstName: new FormControl(),
      // lastName : new FormControl()
    //});
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onLoadDataClick(){
    

    //use setValue when feeding whole form-group
    this.registerForm.setValue({
      //use patchValue when feeding perticular form-control
      //this.registerForm.patchValue({
      userName:'saad',
      email:'mks@gmail.com',
      skills:{
        skillName:'developer',
        experienceInYears:4,
        proficiency:'intermediate'
      }
    });
  }

  onSubmit(){
    console.log(this.registerForm.touched);
    console.log(this.registerForm.value);

    console.log(this.registerForm.controls.userName.touched);
    console.log(this.registerForm.get('userName').value);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
   Date = new Date();
  constructor(private router : Router) {
    //this.Date = new Date();
   }

  ngOnInit() {
  }
  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['']);
  }

}

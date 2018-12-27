import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router,
              private authService : AuthService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('userToken')!= null){
        let roles = next.data["roles"] as Array<String>;
        if(roles){
          var match = this.authService.roleMatch(roles);
          if(match){
            return true;
          }
          else{
            this.router.navigate(['/forbidden']);
            return false;
          }
        }
        else{
          return true;
        }
       //return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}

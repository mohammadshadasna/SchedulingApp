"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { UserService } from '../../services/user.service';
var auth_service_1 = require("../../services/auth.service");
var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(router, 
    //private userService : UserService,
    authService) {
        this.router = router;
        this.authService = authService;
        this.Date = new Date();
        this.isLoggedIn = false;
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
    BsNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('userToken') != null) {
            this.isLoggedIn = true;
            setTimeout(function () {
                _this.userName = JSON.stringify(localStorage.getItem('username'));
                console.log(_this.userName);
            }, 10000);
            //this.userName = JSON.stringify(localStorage.getItem('username'));
        }
        // if (localStorage.getItem('userToken') != null) {
        //   this.authService.getUserClaims().subscribe((data: any) => {
        //     this.userClaims = data;
        //     this.isLoggedIn = true;
        //   });
        // }
    };
    BsNavbarComponent.prototype.Logout = function () {
        // localStorage.removeItem('userToken');
        // localStorage.removeItem('userCredentials');
        this.authService.logout();
        //this.router.navigate(['/']);
    };
    BsNavbarComponent = __decorate([
        core_1.Component({
            selector: 'bs-navbar',
            templateUrl: './bs-navbar.component.html',
            styleUrls: ['./bs-navbar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());
exports.BsNavbarComponent = BsNavbarComponent;
//# sourceMappingURL=bs-navbar.component.js.map
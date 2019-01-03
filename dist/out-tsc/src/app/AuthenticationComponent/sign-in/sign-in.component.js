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
var loginUser_model_1 = require("../../models/loginUser.model");
var auth_service_1 = require("../../services/auth.service");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(
    // private userService : UserService,
    authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {};
        this.isLoginError = false;
        this.isLoading = false;
        this.loginUser = new loginUser_model_1.LoginUser("", "");
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.OnSubmit = function (username, password) {
        var _this = this;
        //var userdata : string;
        // this.userService.userAuthentication(username,password).subscribe((data : any)=>{
        this.isLoading = true;
        this.authService.login(username, password).subscribe(function (data) {
            //userdata = JSON.stringify(data);
            //this.isLoading = false;
            localStorage.setItem("userToken", data.access_token);
            localStorage.setItem("userRoles", data.role);
            _this.authService.getUserCredentials();
            //this.authService.getUserDetails();
            _this.isLoading = false;
            _this.router.navigate(["/homeCalendar"]);
            //neeche ka code tab use karenge jab index page design kar liye honge
            // console.log(data.role);
            // if(this.authService.roleMatch(['SuperAdmin']))
            // {
            //     this.router.navigate(['/homeCalendar']);
            // }
            // else{
            // this.router.navigate(['/index']);
            // }
        }, function (err) {
            _this.isLoading = false;
            _this.isLoginError = true;
        });
        // console.log(userdata);
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: "sign-in",
            templateUrl: "./sign-in.component.html",
            styleUrls: ["./sign-in.component.css"]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map
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
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
//import { User } from '../models/user.model';
//import { element } from 'protractor';
var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.rootUrl = 'http://localhost:1844';
    }
    AuthService.prototype.login = function (userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new http_1.HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
        return this.httpClient.post(this.rootUrl + '/token', data, { headers: reqHeader });
        // this.userClaims$ = this.httpClient.post(this.rootUrl+'/token',data,{headers:reqHeader});
        // this.getUserCredentials();
        // return this.userClaims$;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userCredentials');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.clear(); //remove all key-value pairs from localstorage
        //setti
        this.router.navigate(['/']);
    };
    AuthService.prototype.getUserClaims = function () {
        return this.httpClient.get(this.rootUrl + '/api/GetUserClaims', { headers: new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') }) });
        //.map((response: Response) => <User>response.json());
        //return this.httpClient.get(this.rootUrl+'/api/GetUserClaims');
        //,{headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});
    };
    AuthService.prototype.getUserCredentials = function () {
        var _this = this;
        this.getUserClaims().subscribe(function (data) {
            // if(data != null){
            //   console.log("entered getUserClaims");
            _this.userClaims = data;
            if (_this.userClaims.UserName && _this.userClaims.UserId) {
                // console.log("entered getUserClaims" + this.userClaims.UserName +"and setting local storage");
                localStorage.setItem('username', _this.userClaims.UserName);
                localStorage.setItem('userId', _this.userClaims.UserId);
                localStorage.setItem('userDepartmentId', _this.userClaims.DepartmentId);
                //console.log(this.userClaims.UserId, this.userClaims.UserName);
                //}
                localStorage.setItem('userCredentials', _this.userClaims);
            }
            // else{
            //var userCredentials = localStorage.getItem('userCredentials')
            //console.log(userCredentials);
            // }
            //cast = this.userClaims.asobser 
            //var userName = JSON.stringify(localStorage.getItem('userId'));
            //console.log(userName);
        });
    };
    AuthService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var userRoles = JSON.parse(localStorage.getItem('userRoles'));
        //debugger;
        if (userRoles != null) {
            allowedRoles.forEach(function (element) {
                if (userRoles.indexOf(element) > -1) {
                    isMatch = true;
                    return false;
                }
            });
        }
        return isMatch;
    };
    AuthService.prototype.getAllRoles = function () {
        var reqHeader = new http_1.HttpHeaders({ 'No-Auth': 'True' });
        return this.httpClient.get(this.rootUrl + '/api/GetAllRoles', { headers: reqHeader });
    };
    AuthService.prototype.subscribeUserDetails = function () {
        return this.httpClient.get(this.rootUrl + '/api/getUserDetails');
    };
    AuthService.prototype.getUserDetails = function () {
        var _this = this;
        this.subscribeUserDetails().subscribe(function (data) {
            _this.userClaims = data;
            console.log(data + "getUserDetails");
            if (_this.userClaims.UserName && _this.userClaims.UserId) {
                // console.log("entered getUserClaims" + this.userClaims.UserName +"and setting local storage");
                localStorage.setItem('username', _this.userClaims.UserName);
                localStorage.setItem('userId', _this.userClaims.UserId);
                localStorage.setItem('userDepartmentId', _this.userClaims.DepartmentId);
                //console.log(this.userClaims.UserId, this.userClaims.UserName);
                //}
                localStorage.setItem('userCredentials', _this.userClaims);
            }
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
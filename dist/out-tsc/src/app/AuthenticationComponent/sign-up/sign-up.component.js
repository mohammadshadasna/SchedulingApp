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
var user_model_1 = require("../../models/user.model");
var user_service_1 = require("../../services/user.service");
var ngx_toastr_1 = require("ngx-toastr");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, authService, toastrService, router) {
        this.userService = userService;
        this.authService = authService;
        this.toastrService = toastrService;
        this.router = router;
        this.emailPattern = "^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$";
        this.isLoading = false;
        this.user = new user_model_1.User("", "", "", "", "", "", "");
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.authService.getAllRoles().subscribe(function (data) {
            data.forEach(function (obj) { return (obj.selected = false); });
            _this.roles = data;
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
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
    };
    SignUpComponent.prototype.OnSubmit = function (form) {
        var _this = this;
        //console.log(form);
        //var roles = this.roles.filter(x=> x.selected).map(y => y.Name);
        var roles = "Registered";
        this.isLoading = true;
        this.userService.registerUser(form.value, roles).subscribe(function (data) {
            if (data.Succeeded == true) {
                _this.isLoading = false;
                _this.resetForm(form);
                _this.toastrService.success("user registration successfull");
                _this.router.navigate(["/"]);
            }
            else {
                _this.toastrService.error(data.Errors[0]);
            }
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: "sign-up",
            templateUrl: "./sign-up.component.html",
            styleUrls: ["./sign-up.component.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            auth_service_1.AuthService,
            ngx_toastr_1.ToastrService,
            router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map
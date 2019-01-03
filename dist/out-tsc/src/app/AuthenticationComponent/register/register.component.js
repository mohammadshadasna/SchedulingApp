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
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //defining formgrups and formcontrols using formBuilder class
        this.registerForm = this.formBuilder.group({
            userName: ['', forms_1.Validators.required],
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
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onLoadDataClick = function () {
        //use setValue when feeding whole form-group
        this.registerForm.setValue({
            //use patchValue when feeding perticular form-control
            //this.registerForm.patchValue({
            userName: 'saad',
            email: 'mks@gmail.com',
            skills: {
                skillName: 'developer',
                experienceInYears: 4,
                proficiency: 'intermediate'
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        console.log(this.registerForm.touched);
        console.log(this.registerForm.value);
        console.log(this.registerForm.controls.userName.touched);
        console.log(this.registerForm.get('userName').value);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
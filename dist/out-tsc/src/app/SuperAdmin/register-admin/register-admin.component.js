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
var RegisterAdminComponent = /** @class */ (function () {
    function RegisterAdminComponent() {
    }
    RegisterAdminComponent.prototype.ngOnInit = function () {
    };
    RegisterAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-register-admin',
            templateUrl: './register-admin.component.html',
            styleUrls: ['./register-admin.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RegisterAdminComponent);
    return RegisterAdminComponent;
}());
exports.RegisterAdminComponent = RegisterAdminComponent;
//# sourceMappingURL=register-admin.component.js.map
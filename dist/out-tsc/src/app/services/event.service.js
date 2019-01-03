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
//import { Observable,of } from 'rxjs';
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
//import { catchOperator } from 'rxjs/operator';
var EventService = /** @class */ (function () {
    //renderedAppointments : NewEvent[];
    //---------------------------helper methods---------------
    function EventService(httpClient) {
        this.httpClient = httpClient;
        //-----------------------properties--------------------
        this.rootUrl = 'http://localhost:1844';
    }
    //----------------------http methods-------------------------
    EventService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error:', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error:', errorResponse);
        }
        return rxjs_1.throwError('There is a problemwith the service. We are notified & working on it.Please try again later.');
    };
    EventService.prototype.insertAppointment = function (title, start, end
    //   description: string
    ) {
        var body = {
            appointmentTitle: title,
            appointmentStartDate: start,
            appointmentEndDate: end
        };
        return this.httpClient.post(this.rootUrl + '/api/InsertAppointmentData', body);
        //.pipe(new  RTCError(this.handleError));
    };
    EventService.prototype.getAllAppointments = function () {
        //setTimeout(() => {
        //this.allAppointments = this.httpClient.get(this.rootUrl + '/api/getAppointments');
        //}, 2000);
        return this.httpClient.get(this.rootUrl + '/api/getAllAppointments');
        //return this.allAppointments;
    };
    EventService.prototype.getAllAppointmentsByDepartment = function (department) {
        console.log("eneter select list web service");
        //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2);
        var params = new http_1.HttpParams().set("departmentId", department);
        var reqHeader = new http_1.HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
        return this.httpClient.get(this.rootUrl + '/api/getAllAppointmentsByDepartmentId', { headers: reqHeader, params: params });
    };
    EventService.prototype.getAllAppointmentsByUserId = function (user) {
        var _this = this;
        setTimeout(function () {
            _this.userId = JSON.stringify(localStorage.getItem('userId'));
            console.log(_this.userId);
        }, 5);
        return this.httpClient.get(this.rootUrl + '/api/getAllAppointmentsByUserId');
    };
    EventService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map
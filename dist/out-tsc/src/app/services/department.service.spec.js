"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var department_service_1 = require("./department.service");
describe('DepartmentService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [department_service_1.DepartmentService]
        });
    });
    it('should be created', testing_1.inject([department_service_1.DepartmentService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=department.service.spec.js.map
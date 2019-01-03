"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var event_service_1 = require("./event.service");
describe('EventService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(event_service_1.EventService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=event.service.spec.js.map
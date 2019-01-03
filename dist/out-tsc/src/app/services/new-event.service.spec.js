"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var new_event_service_1 = require("./new-event.service");
describe('NewEventService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [new_event_service_1.NewEventService]
        });
    });
    it('should be created', testing_1.inject([new_event_service_1.NewEventService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=new-event.service.spec.js.map
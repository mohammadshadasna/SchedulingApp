import { TestBed, inject } from '@angular/core/testing';

import { NewEventService } from './new-event.service';

describe('NewEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewEventService]
    });
  });

  it('should be created', inject([NewEventService], (service: NewEventService) => {
    expect(service).toBeTruthy();
  }));
});

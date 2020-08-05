import { TestBed } from '@angular/core/testing';

import { NgserviceServiceService } from './ngservice-service.service';

describe('NgserviceServiceService', () => {
  let service: NgserviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgserviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

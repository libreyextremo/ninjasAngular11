import { TestBed } from '@angular/core/testing';

import { MydataServiceService } from './mydata-service.service';

describe('MydataServiceService', () => {
  let service: MydataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

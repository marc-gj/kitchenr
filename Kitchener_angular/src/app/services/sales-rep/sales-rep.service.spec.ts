import { TestBed, inject } from '@angular/core/testing';

import { SalesRepService } from './sales-rep.service';

describe('SalesRepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesRepService]
    });
  });

  it('should be created', inject([SalesRepService], (service: SalesRepService) => {
    expect(service).toBeTruthy();
  }));
});

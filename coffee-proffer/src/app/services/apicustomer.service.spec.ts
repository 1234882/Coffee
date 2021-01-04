import { TestBed } from '@angular/core/testing';

import { APIcustomerService } from './apicustomer.service';

describe('APIcustomerService', () => {
  let service: APIcustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIcustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

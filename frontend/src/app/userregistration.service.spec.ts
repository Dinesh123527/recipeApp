import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserregistrationService } from './userregistration.service';

describe('UserregistrationService', () => {
  let service: UserregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UserregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

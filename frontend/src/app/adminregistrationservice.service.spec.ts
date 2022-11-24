import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminregistrationService } from './adminregistrationservice.service';

describe('AdminregistrationserviceService', () => {
  let service: AdminregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AdminregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CvWebService } from './cv-web.service';

describe('CvWebService', () => {
  let service: CvWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

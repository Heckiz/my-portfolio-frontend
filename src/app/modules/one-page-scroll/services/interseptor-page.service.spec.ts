import { TestBed } from '@angular/core/testing';

import { InterseptorPageService } from './interseptor-page.service';

describe('InterseptorPageService', () => {
  let service: InterseptorPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterseptorPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

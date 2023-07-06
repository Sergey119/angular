import { TestBed } from '@angular/core/testing';

import { SomeDataService } from './notlist.service';

describe('SomeDataService', () => {
  let service: SomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

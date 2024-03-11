import { TestBed } from '@angular/core/testing';

import { BabyApiService } from './baby-api.service';

describe('BabyApiService', () => {
  let service: BabyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

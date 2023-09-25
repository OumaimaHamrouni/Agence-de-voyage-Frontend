import { TestBed } from '@angular/core/testing';

import { ForfaitService } from './forfait.service';

describe('ForfaitService', () => {
  let service: ForfaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForfaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

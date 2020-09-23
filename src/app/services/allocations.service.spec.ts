import { TestBed } from '@angular/core/testing';

import { AllocationsService } from './allocations.service';

describe('AllocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllocationsService = TestBed.get(AllocationsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LaneService } from './lane.service';

describe('LaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaneService = TestBed.get(LaneService);
    expect(service).toBeTruthy();
  });
});

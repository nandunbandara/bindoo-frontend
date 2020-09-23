import { TestBed } from '@angular/core/testing';

import { PickuplistService } from './pickuplist.service';

describe('PickuplistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PickuplistService = TestBed.get(PickuplistService);
    expect(service).toBeTruthy();
  });
});

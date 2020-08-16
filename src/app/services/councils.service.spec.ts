import { TestBed } from '@angular/core/testing';

import { CouncilsService } from './councils.service';

describe('CouncilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouncilsService = TestBed.get(CouncilsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BinsService } from './bins.service';

describe('BinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BinsService = TestBed.get(BinsService);
    expect(service).toBeTruthy();
  });
});

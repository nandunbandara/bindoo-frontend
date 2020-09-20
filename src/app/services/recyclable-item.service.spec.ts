import { TestBed } from '@angular/core/testing';

import { RecyclableItemService } from './recyclable-item.service';

describe('RecyclableItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecyclableItemService = TestBed.get(RecyclableItemService);
    expect(service).toBeTruthy();
  });
});

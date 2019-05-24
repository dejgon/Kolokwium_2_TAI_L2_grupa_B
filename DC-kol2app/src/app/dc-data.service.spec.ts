import { TestBed } from '@angular/core/testing';

import { DCDataService } from './dc-data.service';

describe('DCDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DCDataService = TestBed.get(DCDataService);
    expect(service).toBeTruthy();
  });
});

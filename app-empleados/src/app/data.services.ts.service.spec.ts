import { TestBed } from '@angular/core/testing';

import { DataServicesTsService } from './data.services.ts.service';

describe('DataServicesTsService', () => {
  let service: DataServicesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServicesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

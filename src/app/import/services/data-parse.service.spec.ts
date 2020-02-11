import { TestBed } from '@angular/core/testing';

import { DataParseService } from './data-parse.service';

describe('DataParseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataParseService = TestBed.get(DataParseService);
    expect(service).toBeTruthy();
  });
});

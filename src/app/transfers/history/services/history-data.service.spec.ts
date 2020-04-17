import { TestBed } from '@angular/core/testing';

import { HistoryDataStore } from './history-data.store';

describe('HistoryDataStore', () => {
  let service: HistoryDataStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryDataStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

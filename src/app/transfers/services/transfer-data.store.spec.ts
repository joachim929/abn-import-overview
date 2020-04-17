import { TestBed } from '@angular/core/testing';

import { TransferDataStore } from './transfer-data.store';

describe('TransferDataStore', () => {
  let service: TransferDataStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferDataStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

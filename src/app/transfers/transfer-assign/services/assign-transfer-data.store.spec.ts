import { TestBed } from '@angular/core/testing';

import { AssignTransferDataStore } from './assign-transfer-data.store';

describe('TransferDataService', () => {
  let service: AssignTransferDataStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignTransferDataStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

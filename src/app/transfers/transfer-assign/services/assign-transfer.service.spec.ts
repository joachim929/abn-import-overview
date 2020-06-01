import { TestBed } from '@angular/core/testing';

import { AssignTransferService } from './assign-transfer.service';

describe('AssignTransferService', () => {
  let service: AssignTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

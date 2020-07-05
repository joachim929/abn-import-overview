import { TestBed } from '@angular/core/testing';

import { ExistingTransferService } from './existing-transfer.service';

describe('ExistingTransferService', () => {
  let service: ExistingTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistingTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

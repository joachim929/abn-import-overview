import { TestBed } from '@angular/core/testing';

import { TransferEditService } from './transfer-edit.service';

describe('TransferEditService', () => {
  let service: TransferEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

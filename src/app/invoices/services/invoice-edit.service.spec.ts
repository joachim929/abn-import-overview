import { TestBed } from '@angular/core/testing';

import { InvoiceEditService } from './invoice-edit.service';

describe('InvoiceEditService', () => {
  let service: InvoiceEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

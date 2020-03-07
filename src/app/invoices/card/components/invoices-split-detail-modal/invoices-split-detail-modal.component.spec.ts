import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesSplitDetailModalComponent } from './invoices-split-detail-modal.component';

describe('InvoicesSplitDetailModalComponent', () => {
  let component: InvoicesSplitDetailModalComponent;
  let fixture: ComponentFixture<InvoicesSplitDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesSplitDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesSplitDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

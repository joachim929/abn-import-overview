import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSplitDetailModalComponent } from './transfer-split-detail-modal.component';

describe('InvoicesSplitDetailModalComponent', () => {
  let component: TransferSplitDetailModalComponent;
  let fixture: ComponentFixture<TransferSplitDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSplitDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSplitDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEditDetailModalComponent } from './transfer-edit-detail-modal.component';

describe('InvoicesEditDetailModalComponent', () => {
  let component: TransferEditDetailModalComponent;
  let fixture: ComponentFixture<TransferEditDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEditDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEditDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

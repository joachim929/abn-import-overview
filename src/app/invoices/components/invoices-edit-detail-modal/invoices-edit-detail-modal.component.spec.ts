import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesEditDetailModalComponent } from './invoices-edit-detail-modal.component';

describe('InvoicesEditDetailModalComponent', () => {
  let component: InvoicesEditDetailModalComponent;
  let fixture: ComponentFixture<InvoicesEditDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesEditDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesEditDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFilterComponent } from './transfer-filter.component';

describe('InvoiceFilterComponent', () => {
  let component: TransferFilterComponent;
  let fixture: ComponentFixture<TransferFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

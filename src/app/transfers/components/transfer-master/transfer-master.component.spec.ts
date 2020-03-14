import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMasterComponent } from './transfer-master.component';

describe('InvoicesMasterComponent', () => {
  let component: TransferMasterComponent;
  let fixture: ComponentFixture<TransferMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

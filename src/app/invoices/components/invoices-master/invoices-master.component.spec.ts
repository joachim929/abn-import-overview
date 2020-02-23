import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesMasterComponent } from './invoices-master.component';

describe('InvoicesMasterComponent', () => {
  let component: InvoicesMasterComponent;
  let fixture: ComponentFixture<InvoicesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

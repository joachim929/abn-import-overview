import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSplitComponent } from './invoice-split.component';

describe('InvoiceSplitComponent', () => {
  let component: InvoiceSplitComponent;
  let fixture: ComponentFixture<InvoiceSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

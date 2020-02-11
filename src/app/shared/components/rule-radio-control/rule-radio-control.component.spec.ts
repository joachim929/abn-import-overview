import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleRadioControlComponent } from './rule-radio-control.component';

describe('RuleRadioControlComponent', () => {
  let component: RuleRadioControlComponent;
  let fixture: ComponentFixture<RuleRadioControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleRadioControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleRadioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleAmountDescriptionControlComponent } from './rule-amount-description-control.component';

describe('RuleAmountDescriptionControlComponent', () => {
  let component: RuleAmountDescriptionControlComponent;
  let fixture: ComponentFixture<RuleAmountDescriptionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleAmountDescriptionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleAmountDescriptionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

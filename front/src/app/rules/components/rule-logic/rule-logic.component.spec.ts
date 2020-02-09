import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleLogicComponent } from './rule-logic.component';

describe('RuleLogicComponent', () => {
  let component: RuleLogicComponent;
  let fixture: ComponentFixture<RuleLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

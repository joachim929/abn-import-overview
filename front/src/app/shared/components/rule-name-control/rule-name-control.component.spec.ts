import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleNameControlComponent } from './rule-name-control.component';

describe('RuleNameControlComponent', () => {
  let component: RuleNameControlComponent;
  let fixture: ComponentFixture<RuleNameControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleNameControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleNameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

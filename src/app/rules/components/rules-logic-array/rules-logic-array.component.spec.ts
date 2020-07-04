import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesLogicArrayComponent } from './rules-logic-array.component';

describe('RulesLogicArrayComponent', () => {
  let component: RulesLogicArrayComponent;
  let fixture: ComponentFixture<RulesLogicArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesLogicArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesLogicArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

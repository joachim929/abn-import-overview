import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesLogicComponent } from './rules-logic.component';

describe('RulesLogicComponent', () => {
  let component: RulesLogicComponent;
  let fixture: ComponentFixture<RulesLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

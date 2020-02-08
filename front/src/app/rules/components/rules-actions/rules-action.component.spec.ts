import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesActionComponent } from './rules-action.component';

describe('ImportExportRulesComponent', () => {
  let component: RulesActionComponent;
  let fixture: ComponentFixture<RulesActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

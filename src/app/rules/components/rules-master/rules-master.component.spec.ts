import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesMasterComponent } from './rules-master.component';

describe('RulesMasterComponent', () => {
  let component: RulesMasterComponent;
  let fixture: ComponentFixture<RulesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

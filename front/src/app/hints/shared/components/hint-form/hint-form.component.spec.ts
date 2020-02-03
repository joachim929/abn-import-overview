import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintFormComponent } from './hint-form.component';

describe('HintFormComponent', () => {
  let component: HintFormComponent;
  let fixture: ComponentFixture<HintFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

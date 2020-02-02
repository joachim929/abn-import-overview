import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsAssignComponent } from './imports-assign.component';

describe('ImportsAssignComponent', () => {
  let component: ImportsAssignComponent;
  let fixture: ComponentFixture<ImportsAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportsAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

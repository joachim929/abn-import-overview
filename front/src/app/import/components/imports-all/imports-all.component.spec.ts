import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsAllComponent } from './imports-all.component';

describe('ImportsAllComponent', () => {
  let component: ImportsAllComponent;
  let fixture: ComponentFixture<ImportsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

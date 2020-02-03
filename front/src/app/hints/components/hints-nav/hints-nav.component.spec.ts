import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintsNavComponent } from './hints-nav.component';

describe('HintsNavComponent', () => {
  let component: HintsNavComponent;
  let fixture: ComponentFixture<HintsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

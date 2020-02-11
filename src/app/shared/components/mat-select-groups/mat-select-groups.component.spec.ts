import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectGroupsComponent } from './mat-select-groups.component';

describe('MatSelectGroupsComponent', () => {
  let component: MatSelectGroupsComponent;
  let fixture: ComponentFixture<MatSelectGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSelectGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGroupDetailComponent } from './category-group-detail.component';

describe('CategoryGroupDetailComponent', () => {
  let component: CategoryGroupDetailComponent;
  let fixture: ComponentFixture<CategoryGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

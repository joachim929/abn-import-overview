import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryGroupComponent } from './delete-category-group.component';

describe('DeleteCategoryGroupComponent', () => {
  let component: DeleteCategoryGroupComponent;
  let fixture: ComponentFixture<DeleteCategoryGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCategoryGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

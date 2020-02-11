import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMasterComponent } from './categories-master.component';

describe('CategoriesMasterComponent', () => {
  let component: CategoriesMasterComponent;
  let fixture: ComponentFixture<CategoriesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

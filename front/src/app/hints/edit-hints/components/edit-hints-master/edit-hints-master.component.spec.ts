import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHintsMasterComponent } from './edit-hints-master.component';

describe('EditHintsMasterComponent', () => {
  let component: EditHintsMasterComponent;
  let fixture: ComponentFixture<EditHintsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHintsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHintsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

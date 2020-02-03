import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHintsMasterComponent } from './view-hints-master.component';

describe('ViewHintsMasterComponent', () => {
  let component: ViewHintsMasterComponent;
  let fixture: ComponentFixture<ViewHintsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHintsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHintsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

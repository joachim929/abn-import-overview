import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintMasterComponent } from './hint-master.component';

describe('HintMasterComponent', () => {
  let component: HintMasterComponent;
  let fixture: ComponentFixture<HintMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

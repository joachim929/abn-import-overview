import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsMasterComponent } from './imports-master.component';

describe('ImportsMasterComponent', () => {
  let component: ImportsMasterComponent;
  let fixture: ComponentFixture<ImportsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

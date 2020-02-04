import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportRulesComponent } from './import-export-rules.component';

describe('ImportExportRulesComponent', () => {
  let component: ImportExportRulesComponent;
  let fixture: ComponentFixture<ImportExportRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportExportRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTransferDialogComponent } from './existing-transfer-dialog.component';

describe('ExistingTransferDialogComponent', () => {
  let component: ExistingTransferDialogComponent;
  let fixture: ComponentFixture<ExistingTransferDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTransferDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

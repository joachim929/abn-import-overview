import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersMasterComponent } from './transfers-master.component';

describe('TransfersMasterComponent', () => {
  let component: TransfersMasterComponent;
  let fixture: ComponentFixture<TransfersMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfersMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

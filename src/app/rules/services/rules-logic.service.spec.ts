import { TestBed } from '@angular/core/testing';

import { RulesLogicService } from './rules-logic.service';

describe('RulesLogicService', () => {
  let service: RulesLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

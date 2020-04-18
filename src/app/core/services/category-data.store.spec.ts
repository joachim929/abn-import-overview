import { TestBed } from '@angular/core/testing';

import { CategoryDataStore } from './category-data.store';

describe('CategoryDataStore', () => {
  let service: CategoryDataStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryDataStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

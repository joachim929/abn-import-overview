import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryDto, CategoryGroupDto} from '../../swagger/models';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataStore {
  private categories = new BehaviorSubject<CategoryGroupDto[]>([]);
  private selectedCategory = new BehaviorSubject(null);
  private dataStore: { categories$: CategoryGroupDto[], selectedCategory$ } = {categories$: [], selectedCategory$: null};

  constructor(
    private categoryApiService: CategoryGroupApiService
  ) {
    this.loadCategories();
  }

  get categories$(): Observable<CategoryGroupDto[]> {
    return this.categories.asObservable();
  }

  loadCategories() {
    this.categoryApiService.getAllCategoryGroupsWithCategories().pipe(
      map((response: CategoryGroupDto[]) => response.map((group) => ({...group, categories: ['Test-1', 'Test-2']})))
    ).subscribe((next) => {
      this.dataStore.categories$ = next;
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }

  patchCategoryGroups(categoryGroups: CategoryGroupDto[]) {
  }
}

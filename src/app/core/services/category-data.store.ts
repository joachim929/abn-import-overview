import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryDto, CategoryGroupDto} from '../../swagger/models';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataStore {
  private categories = new BehaviorSubject<CategoryGroupDto[]>([]);
  private selectedCategory = new BehaviorSubject<CategoryGroupDto>(null);
  private dataStore: { categories$: CategoryGroupDto[], selectedCategory$ } = {categories$: [], selectedCategory$: null};

  constructor(
    private categoryApiService: CategoryGroupApiService
  ) {
    this.loadCategories();
  }

  get categories$(): Observable<CategoryGroupDto[]> {
    return this.categories.asObservable();
  }

  get selectedCategory$(): Observable<CategoryGroupDto> {
    return this.selectedCategory.asObservable();
  }

  setSelectedCategory(id: number) {
    const selectedCategory = this.dataStore.categories$.find(category => category.id === id);
    this.dataStore.selectedCategory$ = {...selectedCategory};
    this.selectedCategory.next(Object.assign({}, this.dataStore).selectedCategory$);
  }

  loadCategories() {
    this.categoryApiService.getAllCategoryGroupsWithCategories().subscribe((next) => {
      this.dataStore.categories$ = [...next];
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }

  patchCategoryGroups(categoryGroups: CategoryGroupDto[]) {
  }
}

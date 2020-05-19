import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryGroupDto} from '../../swagger/models';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';
import {take} from 'rxjs/operators';

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

  setSelectedCategory(id: string) {
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

  createCategory(category: CategoryGroupDto) {
    this.categoryApiService.createCategoryGroup({body: category}).subscribe((response) => {
      this.dataStore.categories$ = [...this.dataStore.categories$, response];
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }

  moveCategories(categoryGroups: CategoryGroupDto[]) {
    categoryGroups.map((categoryGroup) => categoryGroup.categories.map((category, index) => {
      category.order = index;
    }));

    this.categoryApiService.patchMultiple({body: categoryGroups}).subscribe((patchedCategories) => {
      for (let category of this.dataStore.categories$) {
        for (const patchedCategory of patchedCategories) {
          if (patchedCategory.id === category.id) {
            category = {...patchedCategory};
          }
        }
      }
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }
}

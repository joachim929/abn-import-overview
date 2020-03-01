import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryDto, CategoryGroupDto} from '../../swagger/models';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  private categories = new BehaviorSubject<CategoryGroupDto[]>([]);
  private selectedCategory = new BehaviorSubject(null);
  private dataStore: { categories$: CategoryGroupDto[], selectedCategory$ } = {categories$: [], selectedCategory$: null};

  constructor(
    private categoryApiService: CategoryGroupApiService
  ) {
    console.log('Constructor');
    this.loadCategories();
  }

  get categories$(): Observable<CategoryGroupDto[]> {
    return this.categories.asObservable();
  }

  loadCategories() {
    this.categoryApiService.getAllCategoryGroupsWithCategories().subscribe((next) => {
      this.dataStore.categories$ = next;
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }
}

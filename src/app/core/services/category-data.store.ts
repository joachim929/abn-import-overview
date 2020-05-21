import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {CategoryGroupDto} from '../../swagger/models';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataStore {
  private categories = new BehaviorSubject<CategoryGroupDto[]>([]);
  private selectedCategory = new BehaviorSubject<CategoryGroupDto>(null);
  private dataStore: { categories$: CategoryGroupDto[], selectedCategory$ } = {categories$: [], selectedCategory$: null};

  constructor(
    private categoryApiService: CategoryGroupApiService,
    private snackBarService: MatSnackBar
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

  deleteCategoryGroup(categoryGroup: CategoryGroupDto) {
    this.categoryApiService.deleteCategoryGroup({id: categoryGroup.id}).pipe(
      catchError(e => {
        this.handleError(e);
        return of(categoryGroup);
      })
    ).subscribe((response) => {
      if (!response) {
        this.dataStore.categories$ = [...this.dataStore.categories$.filter(category => category.id !== categoryGroup.id)];
        this.categories.next(Object.assign({}, this.dataStore).categories$);
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      this.snackBarService.open(`Something went wrong, HttpStatus: ${error.status}, body was: ${error.error}`, 'OK', {duration: 5000});
    }
  }
}

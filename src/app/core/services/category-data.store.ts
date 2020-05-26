import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {CategoryDto, CategoryGroupDto} from '../../swagger/models';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataStore {
  private isSaving = new BehaviorSubject<boolean>(false);
  private categories = new BehaviorSubject<CategoryGroupDto[]>([]);
  private selectedCategory = new BehaviorSubject<CategoryGroupDto>(null);
  private dataStore: {
    categories$: CategoryGroupDto[],
    selectedCategory$,
    isSaving$: boolean
  } = {
    categories$: [],
    selectedCategory$: null,
    isSaving$: false
  };

  constructor(
    private categoryApiService: CategoryGroupApiService,
    private snackBarService: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loadCategories();
  }

  get isSaving$(): Observable<boolean> {
    return this.isSaving.asObservable();
  }

  get categories$(): Observable<CategoryGroupDto[]> {
    return this.categories.asObservable();
  }

  get selectedCategory$(): Observable<CategoryGroupDto> {
    return this.selectedCategory.asObservable();
  }

  setSelectedCategory(id: string) {
    this.dataStore.selectedCategory$ = this.dataStore.categories$.find(category => category.id === id);
    this.selectedCategory.next(Object.assign({}, this.dataStore).selectedCategory$);
  }

  setSaving(value: boolean) {
    this.dataStore.isSaving$ = value;
    this.isSaving.next(Object.assign({}, this.dataStore).isSaving$);
  }

  loadCategories() {
    this.categoryApiService.getAllCategoryGroupsWithCategories().subscribe((next) => {
      this.dataStore.categories$ = next;
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }

  createCategory(category: CategoryGroupDto) {
    this.setSaving(true);
    this.categoryApiService.createCategoryGroup({body: category}).pipe(
      catchError((error) => {
        this.handleError(error);
        return of(null);
      })
    ).subscribe((response) => {
      if (!response) {
        return;
      }
      this.dataStore.categories$ = [...this.dataStore.categories$, response];
      this.categories.next(Object.assign({}, this.dataStore).categories$);
      this.router.navigate(['/categories'], {relativeTo: this.activatedRoute});
    });
  }

  moveCategories(categoryGroups: CategoryGroupDto[]) {
    this.setSaving(true);
    categoryGroups.map((categoryGroup) => categoryGroup.categories.map((category, index) => {
      category.order = index;
    }));

    this.categoryApiService.patchMultiple({body: categoryGroups}).subscribe((patchedCategories) => {
      this.setSaving(false);
      this.dataStore.categories$.map((category, index) => {
        patchedCategories.map((patchedCategory) => {
          if (patchedCategory.id === category.id) {
            this.dataStore.categories$[index] = patchedCategory;
          }
        });
      });
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }

  deleteCategoryGroup(categoryGroup: CategoryGroupDto) {
    this.setSaving(true);
    this.categoryApiService.deleteCategoryGroup({id: categoryGroup.id}).pipe(
      catchError(e => {
        this.handleError(e);
        return of(categoryGroup);
      })
    ).subscribe((response) => {
      this.setSaving(false);
      if (!response) {
        this.dataStore.categories$ = [...this.dataStore.categories$].filter(category => category.id !== categoryGroup.id);
        this.categories.next(Object.assign({}, this.dataStore).categories$);
      }
    });
  }

  updateCategory(updatedCategory: CategoryDto) {
    let categoryGroup = this.dataStore.categories$.find((categoryGroups) =>
      categoryGroups.categories.find((category) =>
        category.id === updatedCategory.id));
    if (categoryGroup) {
      categoryGroup = {
        ...categoryGroup,
        categories: categoryGroup.categories.map((category) => category.id === updatedCategory.id ? updatedCategory : category)
      };
      this.dataStore = {
        ...this.dataStore,
        categories$: this.dataStore.categories$.map(group => categoryGroup.id === group.id ? categoryGroup : group)
      };
      console.log(this.dataStore.categories$);
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    }
  }

  private handleError(error: HttpErrorResponse) {
    this.setSaving(false);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      this.snackBarService.open(`Something went wrong, HttpStatus: ${error.status}, body was: ${error.error}`, 'OK', {duration: 5000});
    }
  }
}

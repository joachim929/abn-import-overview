import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {CategoryDto, CategoryGroupResource} from '../../swagger/models';
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
  private categories = new BehaviorSubject<CategoryGroupResource[]>([]);
  private selectedCategory = new BehaviorSubject<CategoryGroupResource>(null);
  private dataStore: {
    categories$: CategoryGroupResource[],
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

  get categories$(): Observable<CategoryGroupResource[]> {
    return this.categories.asObservable();
  }

  get selectedCategory$(): Observable<CategoryGroupResource> {
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
    this.categoryApiService.categoryGroupControllerGetAllWithCategories().subscribe((next) => {
      this.dataStore.categories$ = next;
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    });
  }

  createCategory(category: CategoryGroupResource) {
    this.setSaving(true);
    this.categoryApiService.categoryGroupControllerCreate({body: category}).pipe(
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

  moveCategories(categoryGroups: CategoryGroupResource[]) {
    this.setSaving(true);
    // todo: Fix once CategoryDTO has been removed
    categoryGroups.map((categoryGroup) => categoryGroup.categories.map((category: any, index) => {
      category.order = index;
    }));

    this.categoryApiService.categoryGroupControllerPatchMultiple({body: categoryGroups}).subscribe((patchedCategories) => {
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

  deleteCategoryGroup(id: string) {
    this.setSaving(true);
    this.categoryApiService.categoryGroupControllerDelete({id}).pipe(
      catchError(e => {
        this.handleError(e);
        return of(false);
      })
    ).subscribe((response) => {
      this.setSaving(false);
      if (response !== false) {
        this.dataStore.categories$ = [...this.dataStore.categories$].filter(category => category.id !== id);
        this.categories.next(Object.assign({}, this.dataStore).categories$);
      }
    });
  }

  updateCategory(updatedCategory: CategoryDto) {
    let categoryGroup = this.dataStore.categories$.find((categoryGroups) =>
      // todo: Fix once CategoryDTO has been removed
      categoryGroups.categories.find((category: any) =>
        category.id === updatedCategory.id));
    if (categoryGroup) {
      categoryGroup = {
        ...categoryGroup,
        // todo: Fix once CategoryDTO has been removed
        categories: categoryGroup.categories.map((category: any) => category.id === updatedCategory.id ? updatedCategory : category)
      };
      this.dataStore = {
        ...this.dataStore,
        categories$: this.dataStore.categories$.map(group => categoryGroup.id === group.id ? categoryGroup : group)
      };
      this.categories.next(Object.assign({}, this.dataStore).categories$);
    }
  }

  updateCategoryGroup(updatedGroup: CategoryGroupResource): void {
    this.dataStore = {
      ...this.dataStore,
      categories$: {...this.dataStore}.categories$.map((category) =>
        category.id === updatedGroup.id ? updatedGroup : category)
    };
    this.categories.next(Object.assign({}, this.dataStore).categories$);
  }

  private handleError(error: HttpErrorResponse) {
    this.setSaving(false);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      this.snackBarService.open(`Something went wrong, HttpStatus: ${error.status}, body was: ${error.error}`, 'OK', {duration: 5000});
    }
  }

  addNewCategory(category: CategoryDto, parentId: string) {
    this.dataStore = {
      ...this.dataStore,
      categories$: {...this.dataStore}.categories$.map((categoryGroup) => {
        if (categoryGroup.id === parentId) {
          // todo: Fix once CategoryDTO has been removed
          categoryGroup = {...categoryGroup, categories: ([...categoryGroup.categories, category] as any)
              .sort((a, b) => a.order - b.order)};
        }
        return categoryGroup;
      })
    };

    this.categories.next(Object.assign({}, this.dataStore).categories$);
  }

  removeCategory(id: string) {
    this.dataStore = {
      ...this.dataStore,
      categories$: {...this.dataStore}.categories$.map((categoryGroup) => ({
        // todo: Fix once CategoryDTO has been removed
        ...categoryGroup, categories: [...categoryGroup.categories].filter((category: any) => category.id !== id)
      }))
    };
    this.categories.next(Object.assign({}, this.dataStore).categories$);
  }
}

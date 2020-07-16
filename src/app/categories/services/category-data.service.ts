import {Injectable} from '@angular/core';
import {CategoryDataStore} from '../../core/services/category-data.store';
import {CategoryApiService} from '../../swagger/services/category-api.service';
import {CategoryDto} from '../../swagger/models/category-dto';
import {catchError, take, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';
import {CategoryGroupResource} from '../../swagger/models/category-group-resource';

@Injectable()
export class CategoryDataService {

  constructor(
    private categoryDataStore: CategoryDataStore,
    private categoryApiService: CategoryApiService,
    private categoryGroupApiService: CategoryGroupApiService
  ) {
  }

  patchCategory(category: CategoryDto): Observable<CategoryDto> {
    return this.categoryApiService.categoryControllerPatch({body: category}).pipe(
      tap((response) => {
        this.categoryDataStore.updateCategory(response);
      })
    );
  }

  patchCategoryGroup(updatedGroup: CategoryGroupResource): void {
    this.categoryGroupApiService.categoryGroupControllerPatchMultiple({body: [updatedGroup]}).pipe(
      take(1),
      catchError(err => {
        return of(false);
      })
    ).subscribe((response) => {
      if (response !== false && (response as CategoryGroupResource[]).length === 1) {
        this.categoryDataStore.updateCategoryGroup(response[0]);
      }
    });
  }

  createCategory(newCategory: CategoryDto, parentId: string) {
    if (newCategory.order === null || typeof newCategory.order === 'undefined') {
      newCategory = {...newCategory, order: 0};
    }
    this.categoryApiService.categoryControllerCreate({
      body: newCategory,
      parentId
    }).pipe(
      take(1)
    ).subscribe((category) => {
      this.categoryDataStore.addNewCategory(category, parentId);
    });
  }

  deleteCategory(id: string) {
    this.categoryApiService.categoryControllerDelete({id}).pipe(
      take(1),
      catchError(error => {
        return of(false);
      })
    ).subscribe((response) => {
      if (response !== false) {
        this.categoryDataStore.removeCategory(id);
      }
    });
  }
}

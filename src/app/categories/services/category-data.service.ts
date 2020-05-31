import {Injectable} from '@angular/core';
import {CategoryDataStore} from '../../core/services/category-data.store';
import {CategoryApiService} from '../../swagger/services/category-api.service';
import {CategoryDto} from '../../swagger/models/category-dto';
import {catchError, take, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {CategoryGroupDto} from '../../swagger/models/category-group-dto';
import {CategoryGroupApiService} from '../../swagger/services/category-group-api.service';

@Injectable()
export class CategoryDataService {

  constructor(
    private categoryDataStore: CategoryDataStore,
    private categoryApiService: CategoryApiService,
    private categoryGroupApiService: CategoryGroupApiService
  ) {
  }

  patchCategory(category: CategoryDto): Observable<CategoryDto> {
    return this.categoryApiService.patchCategory({body: category}).pipe(
      tap((response) => {
        this.categoryDataStore.updateCategory(response);
      })
    );
  }

  patchCategoryGroup(updatedGroup: CategoryGroupDto): void {
    this.categoryGroupApiService.patchMultiple({body: [updatedGroup]}).pipe(
      take(1),
      catchError(err => {
        return of(false);
      })
    ).subscribe((response) => {
      if (response !== false && (response as CategoryGroupDto[]).length === 1) {
        this.categoryDataStore.updateCategoryGroup(response[0]);
      }
    });
  }

  createCategory(newCategory: CategoryDto, parentId: string) {
    if (newCategory.order === null || typeof newCategory.order === 'undefined') {
      newCategory = {...newCategory, order: 0};
    }
    this.categoryApiService.createCategory({
      body: newCategory,
      parentId
    }).pipe(
      take(1)
    ).subscribe((category) => {
      this.categoryDataStore.addNewCategory(category, parentId);
    });
  }

  deleteCategory(id: number) {
    this.categoryApiService.deleteCategory({id}).pipe(
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

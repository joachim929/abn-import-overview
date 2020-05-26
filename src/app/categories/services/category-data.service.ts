import {Injectable} from '@angular/core';
import {CategoryDataStore} from '../../core/services/category-data.store';
import {CategoryApiService} from '../../swagger/services/category-api.service';
import {CategoryDto} from '../../swagger/models/category-dto';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryDataService {

  constructor(
    private categoryDataStore: CategoryDataStore,
    private categoryApiService: CategoryApiService
  ) {
  }

  patchCategory(category: CategoryDto): Observable<CategoryDto> {
    return this.categoryApiService.patchCategory({body: category}).pipe(
      tap((response) => {
        this.categoryDataStore.updateCategory(response);
      })
    );
  }
}

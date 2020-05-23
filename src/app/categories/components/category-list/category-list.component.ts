import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {Observable, Subject} from 'rxjs';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {takeUntil, tap} from 'rxjs/operators';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryDto} from '../../../swagger/models/category-dto';
import {CategoryFormService} from '../../services/category-form.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  form = new FormArray([]);
  isSaving$: Observable<boolean>;
  unSub = new Subject();

  constructor(
    private categoryDataStore: CategoryDataStore,
    private categoryFormService: CategoryFormService
  ) {
  }

  ngOnInit(): void {
    this.isSaving$ = this.categoryDataStore.isSaving$;
    this.categoryDataStore.categories$.pipe(
      tap(() => this.form.clear()),
      tap((groups) => groups.map(group =>
        this.form.push(this.categoryFormService.buildCategoryGroupFormGroup(group)))),
      takeUntil(this.unSub)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  getFormGroups(): FormGroup[] {
    return this.form.controls as FormGroup[] || [];
  }

  getCategoriesFormArray(formGroup: FormGroup): FormArray {
    return (formGroup.get('categories') as FormArray);
  }

  drop(event: CdkDragDrop<FormGroup>) {
    if (event.previousContainer === event.container) {
      this.categoryFormService.movedItemInFormArray(
        (event.container.data.get('categories') as FormArray),
        event.previousIndex,
        event.currentIndex);
    } else {
      this.categoryFormService.transferFormArrayItem(
        (event.previousContainer.data as FormGroup),
        (event.container.data as FormGroup),
        event.previousIndex,
        event.currentIndex);
    }

    if (event.previousContainer === event.container && event.previousIndex !== event.currentIndex) {
      this.categoryDataStore.moveCategories([event.container.data.value]);
    } else if (event.previousContainer !== event.container) {
      this.categoryDataStore.moveCategories([event.previousContainer.data.value, event.container.data.value]);
    }

  }

  removeCategoryGroup(index) {
    const removedGroup = this.form.at(index).value;
    this.form.removeAt(index);
    this.categoryDataStore.deleteCategoryGroup(removedGroup);
  }
}

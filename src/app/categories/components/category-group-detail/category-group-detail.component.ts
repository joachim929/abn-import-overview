import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {CategoryDataService} from '../../services/category-data.service';
import {CategoryDataStore} from '../../../core/services/category-data.store';

@Component({
  selector: 'app-category-group-detail',
  templateUrl: './category-group-detail.component.html',
  styleUrls: ['./category-group-detail.component.scss']
})
export class CategoryGroupDetailComponent implements OnInit, OnDestroy {
  newCategory = new FormControl({value: null, disabled: true});

  _form: FormGroup;

  @Input() set formCategoryGroup(input: FormGroup) {
    this.originalValue = input.value;
    this._form = input;
  }

  get formCategoryGroup(): FormGroup {
    return this._form;
  }

  unSub = new Subject<void>();
  originalValue: CategoryGroupDto;
  editModeControl = new FormControl(false);

  constructor(
    private categoryDataService: CategoryDataService,
    private categoryDataStore: CategoryDataStore
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  cancel() {
    this.newCategory.disable();
    if (this.originalValue) {
      this.formCategoryGroup.setValue(this.originalValue, {emitEvent: false});
    }
    this.editModeControl.setValue(false);
  }

  clearControl(name: string) {
    this.formCategoryGroup.get(name).setValue('', {emitEvent: false});
  }

  deleteCategoryGroup() {
    if ((this.formCategoryGroup.get('categories') as FormArray).controls.length === 0) {
      this.categoryDataStore.deleteCategoryGroup(this.formCategoryGroup.get('id').value);
    }
  }

  categoriesLength(): number {
    return (this.formCategoryGroup.get('categories') as FormArray).controls.length;
  }

  save() {
    if (this.formCategoryGroup.valid) {
      this.categoryDataService.patchCategoryGroup(this.formCategoryGroup.value);
    }
  }

  toggleNewCategory() {
    this.newCategory.enable();
  }
}

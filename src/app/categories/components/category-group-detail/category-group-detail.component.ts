import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';

@Component({
  selector: 'app-category-group-detail',
  templateUrl: './category-group-detail.component.html',
  styleUrls: ['./category-group-detail.component.scss']
})
export class CategoryGroupDetailComponent implements OnInit, OnDestroy {
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

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  cancel() {
    if (this.originalValue) {
      this.formCategoryGroup.setValue(this.originalValue, {emitEvent: false});
    }
    this.editModeControl.setValue(false);
  }

  clearControl(name: string) {
    this.formCategoryGroup.get(name).setValue('', {emitEvent: false});
  }

  deleteCategoryGroup() {
    // todo: deleteGroup
  }

  categoriesLength(): number {
    return (this.formCategoryGroup.get('categories') as FormArray).controls.length;
  }

  save() {
    // todo: patchGroup
  }

}

import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {isEqual} from 'lodash';
import {Subject} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';

@Component({
  selector: 'app-category-group-detail',
  templateUrl: './category-group-detail.component.html',
  styleUrls: ['./category-group-detail.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoryGroupDetailComponent),
      multi: true
    }
  ]
})
export class CategoryGroupDetailComponent implements ControlValueAccessor, OnInit, OnDestroy {
  form = new FormGroup({
    description: new FormControl(),
    id: new FormControl(),
    name: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(255)
    ])
  });
  unSub = new Subject<void>();
  originalValue: CategoryGroupDto;
  editModeControl = new FormControl(false);

  constructor() {
  }

  ngOnInit() {
    this.form.valueChanges.pipe(
      takeUntil(this.unSub),
      distinctUntilChanged((a, b) => isEqual(a, b))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  clearControl(name: string) {
    this.form.get(name).reset();
    this.form.markAsDirty();
  }

  writeValue(group?: CategoryGroupDto) {
    console.log(group);
    if (group.id) {
      this.originalValue = {...group};
      this.form.setValue(group);
    } else {
      this.originalValue = undefined;
      this.form.reset();
    }
  }

  cancel() {
    if (this.originalValue) {
      this.form.reset({...this.originalValue});
    }
    this.editModeControl.setValue(false);
  }

  save() {
    if (this.form.valid && !(isEqual(this.originalValue, this.form.value))) {
      // todo: Patch group
    }
  }
}

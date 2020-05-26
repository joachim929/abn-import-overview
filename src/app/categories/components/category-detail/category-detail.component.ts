import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {CategoryDto} from '../../../swagger/models/category-dto';
import {distinctUntilChanged, take, takeUntil} from 'rxjs/operators';
import {isEqual} from 'lodash';
import {Subject} from 'rxjs';
import {CategoryDataService} from '../../services/category-data.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoryDetailComponent),
      multi: true
    }
  ]
})
export class CategoryDetailComponent implements ControlValueAccessor, OnInit, OnDestroy {
  form = new FormGroup({
    description: new FormControl(),
    id: new FormControl(),
    name: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(255)
    ]),
    order: new FormControl()
  });

  unSub = new Subject<void>();
  originalValue: CategoryDto;
  editModeControl = new FormControl(false);

  constructor(private categoryDataService: CategoryDataService) {
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

  writeValue(category?: CategoryDto): void {
    if (category.id) {
      this.originalValue = {...category};
      this.form.setValue(category);
    } else {
      this.originalValue = undefined;
      console.warn('no category', category);
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
      this.categoryDataService.patchCategory(this.form.value).pipe(
        take(1)
      ).subscribe((updatedCategory) => {
        if (updatedCategory) {
          this.editModeControl.setValue(false);
        }
      });
    }
  }

  resetControl(name: string) {
    this.form.get(name).reset();
    this.form.markAsDirty();
  }
}

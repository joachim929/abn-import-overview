import {Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {isEqual} from 'lodash-es';
import {CategoryDataService} from '../../services/category-data.service';
import {CategoryDto} from '../../../swagger/models/category-dto';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss', '../../shared/styles/category.shared.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddCategoryComponent),
      multi: true
    }
  ]
})
export class AddCategoryComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Output() cancelAdd = new EventEmitter<void>();
  @Input() parentId: string;
  form = new FormGroup({
    description: new FormControl(),
    id: new FormControl(),
    name: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
      Validators.maxLength(255)
    ]),
    order: new FormControl(0)
  });
  unSub = new Subject<void>();

  constructor(private categoryDataService: CategoryDataService) {
  }

  ngOnInit(): void {
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
    if (category?.id) {
      this.form.setValue(category);
    } else {
      this.form.reset();
    }
  }

  cancel() {
    this.form.reset();
    this.cancelAdd.emit();
  }

  save() {
    if (this.form.valid && this.parentId) {
      this.categoryDataService.createCategory(this.form.value, this.parentId);
    }
  }

  clearControl(name: string) {
    this.form.get(name).reset();
    this.form.markAsPristine();
    this.form.markAsDirty();
  }
}

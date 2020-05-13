import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {CategoryDto} from '../../../swagger/models/category-dto';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddCategoryComponent),
    multi: true
  }]
})
export class AddCategoryComponent implements OnInit, ControlValueAccessor {
  form = new FormGroup({
    categoryGroupId: new FormControl(),
    description: new FormControl(),
    id: new FormControl(),
    name: new FormControl(null, [Validators.required, Validators.minLength(2)])
  });

  @Input() categoryGroup?: CategoryGroupDto;

  constructor() {
  }

  ngOnInit() {
    this.form.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((next) => {
      this.form.valid ? this.onChange(next) : this.onChange(null);
    });
  }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(input): void {
    this.form.reset();
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

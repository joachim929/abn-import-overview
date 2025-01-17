import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {CategoryDto} from '../../../swagger/models/category-dto';

@Component({
  selector: 'app-categories-select',
  templateUrl: './categories-select.component.html',
  styleUrls: ['./categories-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CategoriesSelectComponent),
      multi: true
    }
  ]
})
export class CategoriesSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() label?: string;
  control = new FormControl();
  categoryGroups$: Observable<CategoryGroupDto[]>;
  unSub = new Subject<void>();

  constructor(private categoryDataStore: CategoryDataStore) {
  }

  ngOnInit() {
    this.categoryGroups$ = this.categoryDataStore.categories$;
    this.control.valueChanges.subscribe((next) => this.onChange(next));
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

  writeValue(input: CategoryDto) {
    if (input) {
      this.control.setValue(input);
    } else {
      this.control.reset();
    }
  }

  compareFn(c1: CategoryDto, c2: CategoryDto): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}

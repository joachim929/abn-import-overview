import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-rules-logic',
  templateUrl: './rules-logic.component.html',
  styleUrls: ['./rules-logic.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RulesLogicComponent),
      multi: true
    }
  ]
})
export class RulesLogicComponent implements ControlValueAccessor, OnInit, OnDestroy {
  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    valueOne: new FormControl(),
    valueTwo: new FormControl(),
    conditionOperator: new FormControl()
  });
  unSub = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  onChange = (_) => {
  };
  onTouched = () => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any) {
    if (obj) {
      this.form.setValue(obj);
    } else {
      this.form.reset();
    }
  }
}

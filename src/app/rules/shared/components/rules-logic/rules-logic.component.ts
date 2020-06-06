import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

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
  /**
   * todo:
   *    Implement logic where valueOne requires transferKey value
   *    Implement logic where valueTwo requires specific conditionOperator
   *    Implement options where conditionOperator options depend on transferKey value
   */
  form = new FormGroup({
    id: new FormControl(),
    transferKey: new FormControl(),
    valueOne: new FormControl({value: null, disabled: true}),
    valueTwo: new FormControl({value: null, disabled: true}),
    conditionOperator: new FormControl({value: null, disabled: true})
  });
  unSub = new Subject<void>();
  conditionOperatorOptions$: Observable<any[]>;
  conditionOperatorMap = {

  };

  constructor() {
  }

  ngOnInit(): void {
    this.conditionOperatorOptions$ = this.form.get('transferKey').valueChanges.pipe(
      map((value) => this.conditionOperatorMap[value])
    );
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

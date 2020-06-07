import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, takeUntil, tap} from 'rxjs/operators';
import {ConditionOperatorEnum, TransferKeyEnum} from '../../../../swagger/models';

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
    value: new FormControl({value: null, disabled: true}),
    conditionOperator: new FormControl({value: null, disabled: true})
  });
  dateOperators = [
    {value: ConditionOperatorEnum.Equals, name: 'Equals'},
    {value: ConditionOperatorEnum.GreaterThan, name: 'Greater than'},
    {value: ConditionOperatorEnum.GreaterOrEqualThan, name: 'Greater or equal than'},
    {value: ConditionOperatorEnum.LessThan, name: 'Less than'},
    {value: ConditionOperatorEnum.LessOrEqualThan, name: 'Less or equal than'},
    {value: ConditionOperatorEnum.Not, name: 'Not'}
  ];
  numberOperators = [
    {value: ConditionOperatorEnum.Equals, name: 'Equals'},
    {value: ConditionOperatorEnum.GreaterThan, name: 'Greater than'},
    {value: ConditionOperatorEnum.GreaterOrEqualThan, name: 'Greater or equal than'},
    {value: ConditionOperatorEnum.LessThan, name: 'Less than'},
    {value: ConditionOperatorEnum.LessOrEqualThan, name: 'Less or equal than'},
    {value: ConditionOperatorEnum.Not, name: 'Not'}
  ];
  stringOperators = [
    {value: ConditionOperatorEnum.Equals, name: 'Equals'},
    {value: ConditionOperatorEnum.Contains, name: 'Contains'},
    {value: ConditionOperatorEnum.Like, name: 'Like'},
    {value: ConditionOperatorEnum.Not, name: 'Not'}
  ];
  unSub = new Subject<void>();
  conditionOperatorOptions$: Observable<any[]>;
  conditionOperatorMap = {
    Amount: this.numberOperators,
    Description: this.stringOperators,
    TransactionDate: this.dateOperators,
    CurrencyCode: this.stringOperators,
    AccountNumber: this.stringOperators,
    StartBalance: this.numberOperators,
    EndBalance: this.numberOperators
  };
  valueType = 'text';

  allTransferKeys = Object.keys(TransferKeyEnum);


  constructor() {
  }

  ngOnInit(): void {
    this.conditionOperatorOptions$ = this.form.get('transferKey').valueChanges.pipe(
      distinctUntilChanged(),
      map((value) => this.conditionOperatorMap[value]),
      tap((value) => {
          this.valueType = 'text';
          this.form.get('value').clearValidators();
          if (value === this.numberOperators) {
            this.form.get('value').setValidators([
              Validators.required,
              Validators.pattern('^d+.d{0,2}$')
            ]);
          } else if (value === this.stringOperators) {
            this.form.get('value').setValidators([
              Validators.required
            ]);
          } else if (value === this.dateOperators) {
            this.form.get('value').setValidators([
              Validators.required
            ]);
            this.valueType = 'date';
          }
        }
      ),
      tap((x) => {
        this.form.get('conditionOperator').reset();
        this.form.get('value').reset();
        if (!!x) {
          this.form.get('value').enable();
          this.form.get('conditionOperator').enable();
        } else {
          this.form.get('value').disable();
          this.form.get('conditionOperator').disable();
        }
      })
    );
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

  writeValue(obj: any) {
    if (obj) {
      this.form.setValue(obj);
    } else {
      this.form.reset();
    }
  }
}

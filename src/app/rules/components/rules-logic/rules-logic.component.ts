import {AfterViewInit, Component, forwardRef, OnDestroy} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, map, takeUntil, tap} from 'rxjs/operators';
import {TransferKeyEnum} from '../../../swagger/models';
import {dateOperators, numberOperators, stringOperators} from '../../shared/rule-logic.constants';
import {RulesLogicService} from '../../services/rules-logic.service';

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
export class RulesLogicComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  form = new FormGroup({
    id: new FormControl(),
    transferKey: new FormControl(),
    value: new FormControl({value: null, disabled: true}),
    conditionOperator: new FormControl({value: null, disabled: true}, [Validators.required]),
    type: new FormControl()
  });
  dateOptions = dateOperators;
  numberOptions = numberOperators;
  stringOptions = stringOperators;
  unSub = new Subject<void>();
  conditionOperatorOptions$: Observable<any[]>;
  conditionOperatorMap = {
    Amount: this.numberOptions,
    Description: this.stringOptions,
    TransactionDate: this.dateOptions,
    CurrencyCode: this.stringOptions,
    AccountNumber: this.stringOptions,
    StartBalance: this.numberOptions,
    EndBalance: this.numberOptions
  };
  valueType = 'text';

  allTransferKeys = Object.keys(TransferKeyEnum);
  preDisableValue;


  constructor(
    private rulesLogicService: RulesLogicService
  ) {
  }

  ngAfterViewInit(): void {
    this.conditionOperatorOptions$ = this.form.get('transferKey').valueChanges.pipe(
      distinctUntilChanged(),
      map((value) => this.conditionOperatorMap[value]),
      tap((value) => this.form.get('type').setValue(this.rulesLogicService.applyValidators(this.form.get('value') as FormControl, value))),
      tap((x) => {
        const conditionOperatorValue = this.form.get('conditionOperator').value;
        if (!conditionOperatorValue || x?.filter((item: {value, name}) => item.value === conditionOperatorValue).length === 0) {
          this.form.get('conditionOperator').reset(null, {emitEvent: false});
        }
        this.form.get('value').reset(null, {emitEvent: false});
        if (!!x) {
          this.form.get('value').enable({emitEvent: false});
          this.form.get('conditionOperator').enable({emitEvent: false});
        } else {
          this.form.get('value').disable({emitEvent: false});
          this.form.get('conditionOperator').disable({emitEvent: false});
        }
      })
    );

    this.form.valueChanges.pipe(
      takeUntil(this.unSub),
      distinctUntilChanged()
    ).subscribe(() => {
      if (this.form.valid && this.form.value?.value && this.form.value?.conditionOperator) {
        this.onChange(this.form.value);
      } else {
        this.onChange(null);
      }
    });

    this.form.get('type').valueChanges.pipe(
      takeUntil(this.unSub)
    ).subscribe((next) => {
      this.valueType = next === 'Date' ? 'date' : 'text';
    });
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  onChange = (_) => ({});
  onTouched = () => ({});

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any) {
    if (obj) {
      this.preDisableValue = obj;
      this.form.enable({emitEvent: false});
      this.form.setValue(obj);
    } else {
      this.form.reset();
    }
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      console.log(this.form);
      this.preDisableValue = this.form.value;
      this.form.disable();
    } else {
      this.form.enable();
      this.form.setValue(this.preDisableValue);
    }
  }
}

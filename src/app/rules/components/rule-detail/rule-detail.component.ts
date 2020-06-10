import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TransferConditionDto} from '../../../swagger/models/transfer-condition-dto';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {minLengthThisOrThat} from '../../shared/rules-custom.validators';
import {RulesDataStore} from '../../../core/services/rules-data.store';
import {Subject} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

/**
 * todo: convert to  controlValueAccessor,
 *    extract re-useable functionality from create-rule
 */
@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit, OnDestroy {
  editMode = false;
  _rule: TransferConditionDto;
  @Input() set rule(input: TransferConditionDto) {
    this.original = {...input};
    this._rule = {...input};
    this.initForm(input);
  }

  get rule(): TransferConditionDto {
    return this._rule;
  }

  unSub = new Subject();
  original: TransferConditionDto;
  form = new FormGroup({
    autoAssign: new FormControl(false),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(),
    category: new FormControl({value: null, disabled: true}, [Validators.required]),
    orLogic: new FormArray([]),
    andLogic: new FormArray([]),
    id: new FormControl()
  });

  constructor(private rulesDataStore: RulesDataStore) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  getFormArrayControls(name: string): FormControl[] {
    return (this.form.get(name) as FormArray).controls as FormControl[];
  }

  // todo: Implement
  deleteRule(): void {

  }

  removeLogicAt(name: 'orLogic' | 'andLogic', index: number): void {
    (this.form.get(name) as FormArray).removeAt(index);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }

  addControlToLogic(name: 'orLogic' | 'andLogic'): void {
    (this.form.get(name) as FormArray).push(new FormControl());
  }

  cancel() {
    this.initForm(this.original);
    this.toggleEditMode();
  }

  save() {
    console.log(this.form);
    if (this.form.valid) {
      console.log(this.formatValue(this.form.value));
      this.rulesDataStore.saveRule(this.formatValue(this.form.value));
    } else {
      this.form.markAllAsTouched();
    }
  }

  private formatValue(formValue: TransferConditionDto): TransferConditionDto {
    return {
      ...formValue,
      orLogic: formValue?.orLogic?.filter(logic => !!logic),
      andLogic: formValue?.andLogic?.filter(logic => !!logic)
    };
  }

  private initForm(input) {
    this.form.reset();
    this.form.get('orLogic').setValidators([minLengthThisOrThat(this.form.get('andLogic') as FormArray)]);
    this.form.get('andLogic').setValidators([minLengthThisOrThat(this.form.get('orLogic') as FormArray)]);
    // this.form.get('andLogic').statusChanges.pipe(
    //   takeUntil(this.unSub),
    //   distinctUntilChanged()
    // ).subscribe((status) => {
    //   if (status === 'VALID') {
    //     this.form.get('orLogic').markAsTouched({onlySelf: true});
    //   }
    // });
    // this.form.get('orLogic').statusChanges.pipe(
    //   takeUntil(this.unSub),
    //   distinctUntilChanged()
    // ).subscribe((status) => {
    //   if (status === 'VALID') {
    //     this.form.get('orLogic').markAsTouched({onlySelf: true});
    //   }
    //   console.log('orLogic', status);
    // });
    (this.form.get('orLogic') as FormArray).clear();
    input?.orLogic?.map(() => (this.form.get('orLogic') as FormArray).push(new FormControl()));
    (this.form.get('andLogic') as FormArray).clear();
    input?.andLogic?.map(() => (this.form.get('andLogic') as FormArray).push(new FormControl()));
    this.form.setValue(input);
    this.form.disable();
  }
}

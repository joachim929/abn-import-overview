import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {minLengthThisOrThat} from '../../shared/rules-custom.validators';
import {RulesDataStore} from '../../../core/services/rules-data.store';
import {Subject} from 'rxjs';
import {TransferConditionDto} from '../../../swagger/models';

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

  deleteRule(): void {
    this.rulesDataStore.deleteRule(this.original.id);
  }

  cloneRule() {
    const copy = {...this.original, id: null, name: this.original.name + ' (copy)'};
    this.rulesDataStore.addRule(copy);
    this.initForm(this.original);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.form.enable();
    } else {
      this.form.disable();
    }
  }

  cancel() {
    this.initForm(this.original);
    this.toggleEditMode();
  }

  save() {
    if (this.form.valid) {
      this.rulesDataStore.patchRule(this.formatValue(this.form.value));
    } else {
      this.form.markAllAsTouched();
      this.form.get('andLogic').markAsDirty();
      this.form.get('orLogic').markAsDirty();
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
    ['orLogic', 'andLogic'].forEach((controlKey, index) => {
      this.form.get(controlKey).setValidators([
        minLengthThisOrThat(this.form.get(controlKey === 'andLogic' ? 'orLogic' : 'andLogic') as FormArray)
      ]);
      (this.form.get(controlKey) as FormArray).clear();
      input[controlKey]?.map(() => (this.form.get(controlKey) as FormArray).push(new FormControl()));
    });
    // this.form.get('orLogic').setValidators([minLengthThisOrThat(this.form.get('andLogic') as FormArray)]);
    // this.form.get('andLogic').setValidators([minLengthThisOrThat(this.form.get('orLogic') as FormArray)]);
    // (this.form.get('orLogic') as FormArray).clear();
    // input?.orLogic?.map(() => (this.form.get('orLogic') as FormArray).push(new FormControl()));
    // (this.form.get('andLogic') as FormArray).clear();
    // input?.andLogic?.map(() => (this.form.get('andLogic') as FormArray).push(new FormControl()));
    this.form.setValue(input);
    this.form.disable();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {TransferConditionDto} from '../../../swagger/models/transfer-condition-dto';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit(): void {
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

  private initForm(input) {
    this.form.reset();
    (this.form.get('orLogic') as FormArray).clear();
    input?.orLogic?.map(() => (this.form.get('orLogic') as FormArray).push(new FormControl()));
    (this.form.get('andLogic') as FormArray).clear();
    input?.andLogic?.map(() => (this.form.get('andLogic') as FormArray).push(new FormControl()));
    this.form.setValue(input);
    this.form.disable();
  }
}

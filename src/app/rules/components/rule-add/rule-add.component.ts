import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rule-add',
  templateUrl: './rule-add.component.html',
  styleUrls: ['./rule-add.component.scss']
})
export class RuleAddComponent implements OnInit {
  form = new FormGroup({
    autoAssign: new FormControl(),
    name: new FormControl(), // async for unique name
    category: new FormControl(),
    description: new FormControl(),
    transferKey: new FormControl(), // select, get options from BE
    orLogic: new FormArray([
      new FormControl()
    ]),
    andLogic: new FormArray([
      new FormControl()
    ])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  getFormArrayControls(name: string): FormControl[] {
    return (this.form.get(name) as FormArray).controls as FormControl[];
  }

  // todo: Move to service
  createLogicFormGroup() {
    return new FormGroup({
      name: new FormControl(),
      values: new FormControl(),
      conditionOperator: new FormControl() // select, get options from BE
    });
  }

  addCondition(name: 'andLogic' | 'orLogic'): void {
    (this.form.get(name) as FormArray).push(new FormControl());
  }

  removeLogic(name: 'andLogic' | 'orLogic', index: number): void {
    (this.form.get(name) as FormArray).removeAt(index);
  }

}

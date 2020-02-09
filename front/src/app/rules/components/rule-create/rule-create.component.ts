import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RuleService} from '../../../core/services/rule.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rule-create',
  templateUrl: './rule-create.component.html',
  styleUrls: ['./rule-create.component.scss']
})
export class RuleCreateComponent implements OnInit {
  categoryGroups = [
    {
      name: 'Food',
      id: 1,
      category: [
        {id: 1, name: 'Snacks'},
        {id: 2, name: 'Groceries'}
      ]
    },
    {
      name: 'Social',
      id: 2,
      category: [
        {id: 3, name: 'Drinks'},
        {id: 4, name: 'Activity'}
      ]
    },
    {
      name: 'Bills',
      id: 3,
      category: [
        {id: 5, name: 'Travel'},
        {id: 6, name: 'Rent'}
      ]
    }
  ];

  amountOptions = [
    {id: 'lessThan', name: 'Less than'},
    {id: 'greaterThan', name: 'Greater than'},
    {id: 'equalTo', name: 'Equal to'}
  ];

  descriptionOptions = [
    {id: 'contains', name: 'Description contains'},
    {id: 'notContain', name: 'Description doesn\'t contain'}
  ];

  createAnother = new FormControl();

  ruleForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    amount: new FormArray([
      new FormGroup({
        rule: new FormControl(null, [Validators.required]),
        value: new FormControl(null, [Validators.required])
      })
    ]),
    description: new FormArray([
      new FormGroup({
        rule: new FormControl(null, [Validators.required]),
        value: new FormControl(null, [Validators.required])
      })
    ]),
    categoryId: new FormControl(null, [Validators.required]),
    autoAssign: new FormControl(null)
  });

  constructor(
    private ruleService: RuleService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.ruleForm.valueChanges.subscribe((next) => {

    });
  }


  getArray(name: string): FormArray {
    return (this.ruleForm.get(name) as FormArray);
  }

  resetForm() {
    this.ruleForm.reset();
    this.resetFormArray('description');
    this.resetFormArray('amount');
  }

  addRule() {
    if (this.ruleForm.valid) {
      const newRule = this.ruleForm.value;
      newRule.autoAssign = !!newRule.autoAssign;
      this.ruleService.rules.push(newRule);
    }
    if (this.createAnother.value) {
      this.ruleForm.reset();
    } else {
      this.location.back();
    }
  }

  goBack() {
    this.location.back();
  }

  private resetFormArray(name: string): void {
    (this.ruleForm.get(name) as FormArray).clear();
    (this.ruleForm.get(name) as FormArray).controls.push(
      new FormGroup({
        rule: new FormControl(null, [Validators.required]),
        value: new FormControl(null, [Validators.required])
      })
    );
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../core/interfaces-types/rule.interface';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RuleService} from '../../../core/services/rule.service';
import {amountOptions, descriptionOptions} from '../../constants/amount-options.constant';
import {CategoryGroup} from '../../../core/interfaces-types/category.interface';

@Component({
  selector: 'app-rule-edit',
  templateUrl: './rule-edit.component.html',
  styleUrls: ['./rule-edit.component.scss']
})
export class RuleEditComponent implements OnInit {
  _rule: Rule;
  @Input() set rule(input: Rule) {
    if (input) {
      this._rule = input;
      this.initGroup();
    } else {
      this._rule = null;
      this.form = null;
    }
  }

  get rule(): Rule {
    return this._rule;
  }

  form: FormGroup;

  testAmountOptions = amountOptions;
  testDescriptionOptions = descriptionOptions;

  constructor(
    private ruleService: RuleService
  ) {
  }

  ngOnInit() {
  }

  getArray(name: string): FormArray {
    return (this.form.get(name) as FormArray);
  }

  saveChanges() {
    if (!this.ruleService.editRule(this.form.value)) {
      console.warn('Rule edit failed');
    }
  }

  private initGroup() {
    const name = this.createFormArrayGroup(this.rule.amount);
    const description = this.createFormArrayGroup(this.rule.description);

    this.form = new FormGroup({
      name: new FormControl(this.rule.name, [Validators.required]),
      amount: new FormArray(name),
      description: new FormArray(description),
      categoryId: new FormControl(this.rule.categoryId),
      autoAssign: new FormControl(this.rule.autoAssign),
      id: new FormControl(this.rule.id)
    });
  }

  private createFormArrayGroup(amountOrDescription) {
    return amountOrDescription.map((amountRule, index) => {
      const group = new FormGroup({
        rule: new FormControl(amountRule.rule, [Validators.required]),
        value: new FormControl(amountRule.value, [Validators.required])
      });

      if (index !== amountOrDescription.length - 1) {
        group.addControl('andOr', new FormControl(amountRule.andOr));
      }
      return group;
    });
  }

}

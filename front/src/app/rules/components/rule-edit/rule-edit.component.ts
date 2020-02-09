import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../core/interfaces-types/rule.interface';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AmountRuleEnum, AmountRuleType, DescriptionRuleEnum, DescriptionRuleType} from '../../../core/interfaces-types/hint.types';
import {Category, CategoryService} from '../../../import/services/category.service';
import {RuleService} from '../../../core/services/rule.service';
import {map} from 'rxjs/operators';

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
  descriptionOptions: DescriptionRuleType[] = [DescriptionRuleEnum.not, DescriptionRuleEnum.contains];
  amountOptions: AmountRuleType[] = [AmountRuleEnum.lessThan, AmountRuleEnum.greaterThan, AmountRuleEnum.equalTo];
  andOrOptions = [
    {name: 'And', value: 'and'},
    {name: 'Or', value: 'or'}
  ];

  constructor(
    private categoryService: CategoryService,
    private ruleService: RuleService
  ) {
  }

  ngOnInit() {
  }

  get categories(): Category[] {
    return this.categoryService.categories;
  }

  getArray(name: string): FormArray {
    return (this.form.get(name) as FormArray);
  }

  saveChanges() {
    if (!this.ruleService.editRule(this.form.value)) {
      console.warn('Rule edit failed');
    }
    this.form.markAsPristine();
  }

  private initGroup() {
    const name = this.rule.amount.map((amountRule, index) => {
      const group = new FormGroup({
        rule: new FormControl(amountRule.rule),
        value: new FormControl(amountRule.value)
      });
      group.get('value').valueChanges.pipe(map(x => Number(x)));
      if (index !== this.rule.amount.length - 1) {
        group.addControl('andOr', new FormControl(amountRule.andOr));
      }
      return group;
    });

    const description = this.rule.description.map((descriptionRule, index) => {
      const group = new FormGroup({
        rule: new FormControl(descriptionRule.rule),
        value: new FormControl(descriptionRule.value)
      });
      if (index !== this.rule.description.length - 1) {
        group.addControl('andOr', new FormControl(descriptionRule.andOr));
      }
      return group;
    });
    this.form = new FormGroup({
      name: new FormControl(this.rule.name),
      amount: new FormArray(name),
      description: new FormArray(description),
      categoryId: new FormControl(this.rule.categoryId),
      autoAssign: new FormControl(this.rule.autoAssign),
      id: new FormControl(this.rule.id)
    });
  }

}

import {Injectable} from '@angular/core';
import {Rule} from '../interfaces-types/hint.interface';
import {CategoryService} from '../../import/services/category.service';
import {AmountRuleEnum, AmountRuleType, DescriptionRuleEnum, DescriptionRuleType} from '../interfaces-types/hint.types';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  rules: Rule[] = [
    {
      id: 1,
      amount: [
        {rule: AmountRuleEnum.lessThan, value: 0, andOr: 'and'},
        {rule: AmountRuleEnum.greaterThan, value: -6.50}
      ],
      description: [
        {rule: DescriptionRuleEnum.contains, value: 'Kiosk'}
      ],
      categoryId: 1,
      autoAssign: true
    },
    {
      id: 2,
      amount: [],
      description: [
        {rule: DescriptionRuleEnum.contains, value: 'Albert', andOr: 'and'},
        {rule: DescriptionRuleEnum.contains, value: 'Heijn', andOr: 'and'},
        {rule: DescriptionRuleEnum.not, value: 'Kiosk'}
      ],
      categoryId: 2,
      autoAssign: false
    }
  ];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  removeRule(ruleId: number): void {
    for (let i = 0; i < this.rules.length; i++) {
      if (this.rules[i].id === ruleId) {
        this.rules.splice(i, 1);
        break;
      }
    }
  }

  editRule(rule: Rule): boolean {
    for (let i = 0; i < this.rules.length; i++) {
      if (this.rules[i].id === rule.id) {
        this.rules[i] = rule;
        return true;
      }
    }
    return false;
  }

  validateImport(importedRules: unknown): boolean {
    let validImport = false;

    if (Array.isArray(importedRules) && importedRules.length > 0) {
      let validArray = true;
      const categoryIds = this.categoryService.categories.map(category => category.id);
      for (const rule of importedRules) {
        if (!this.validateAmount(rule) && !this.validateDescription(rule)) {
          validArray = false;
          break;
        }

        if (!categoryIds.includes(rule.categoryId)) {
          break;
        }

        if (Number(rule.id) <= 0) {
          validArray = false;
          break;
        }
      }
      validImport = validArray;
    }

    return validImport;
  }

  private validateAmount(rules: any): boolean {
    const amountTypes: AmountRuleType[] = [AmountRuleEnum.equalTo, AmountRuleEnum.lessThan, AmountRuleEnum.greaterThan];
    let validAmounts = false;
    if (rules.amount && Array.isArray(rules.amount) && rules.amount.length > 0) {
      validAmounts = this.validateInstance(rules, 'amount', amountTypes, 'number');
    }

    return validAmounts;
  }

  private validateInstance(rules, attribute: string, ruleTypes: string[], valueType: string): boolean {
    let validInstance = true;
    if (rules[attribute] && rules[attribute].length > 0) {
      for (let i = 0; i < rules[attribute].length; i++) {
        if (i === rules[attribute].length - 1 && rules[attribute][i].andOr) {
          validInstance = false;
          break;
        }

        if (typeof rules[attribute][i].rule !== 'string' || !ruleTypes.includes(rules[attribute][i].rule)) {
          validInstance = false;
          break;
        }

        if (typeof rules[attribute][i].value !== valueType) {
          validInstance = false;
          break;
        }
      }
    } else {
      validInstance = false;
    }
    return validInstance;
  }

  private validateDescription(rules: any): boolean {
    const descriptionTypes: DescriptionRuleType[] = [DescriptionRuleEnum.not, DescriptionRuleEnum.contains];
    let validDescriptions = false;
    if (rules.description && Array.isArray(rules.description) && rules.description.length > 0) {
      validDescriptions = this.validateInstance(rules, 'description', descriptionTypes, 'string');
    }

    return validDescriptions;
  }
}

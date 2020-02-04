import {AmountRuleType, AndOrType, DescriptionRuleType} from './hint.types';

export interface Rule {
  id: number;
  name?: string;
  amount?: AmountRule[];
  description?: DescriptionRule[];
  categoryId: number;
  autoAssign: boolean;
}

export interface AmountRule {
  rule: AmountRuleType;
  value: number;
  andOr?: AndOrType;
}

export interface DescriptionRule {
  rule: DescriptionRuleType;
  value: string;
  andOr?: AndOrType;
}

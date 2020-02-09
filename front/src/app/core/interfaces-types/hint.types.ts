export type DescriptionRuleType = DescriptionRuleEnum.contains | DescriptionRuleEnum.not;
export type AmountRuleType = AmountRuleEnum.greaterThan | AmountRuleEnum.lessThan | AmountRuleEnum.equalTo;
export type AndOrType = 'and' | 'or';

export enum AmountRuleEnum {
  lessThan = 'lessThan',
  greaterThan = 'greaterThan',
  equalTo = 'equalTo'
}

export enum DescriptionRuleEnum {
  contains = 'contains',
  not = 'notContain'
}

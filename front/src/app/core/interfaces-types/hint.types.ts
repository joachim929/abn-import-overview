export type DescriptionRuleType = DescriptionRuleEnum.contains | DescriptionRuleEnum.not;
export type AmountRuleType = AmountRuleEnum.greaterThan | AmountRuleEnum.lessThan | AmountRuleEnum.equalTo;
export type AndOrType = 'and' | 'or';

export enum AmountRuleEnum {
  lessThan = 'less than',
  greaterThan = 'greater than',
  equalTo = 'equal to'
}

export enum DescriptionRuleEnum {
  contains = 'contains',
  not = 'doesn\'t contain'
}

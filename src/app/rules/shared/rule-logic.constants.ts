import {ConditionOperatorEnum} from '../../swagger/models';

export type DateOperatorType = Extract<ConditionOperatorEnum,
  ConditionOperatorEnum.Equals |
  ConditionOperatorEnum.NotEqual |
  ConditionOperatorEnum.GreaterThan |
  ConditionOperatorEnum.GreaterOrEqualThan |
  ConditionOperatorEnum.LessThan |
  ConditionOperatorEnum.LessOrEqualThan>;

export enum DateOperators {
  Equals = ConditionOperatorEnum.Equals,
  NotEqual = ConditionOperatorEnum.NotEqual,
  GreaterThan = ConditionOperatorEnum.GreaterThan,
  GreaterOrEqualThan = ConditionOperatorEnum.GreaterOrEqualThan,
  LessThan = ConditionOperatorEnum.LessThan,
  LessOrEqualThan = ConditionOperatorEnum.LessOrEqualThan
}

export const dateOperators: {value: DateOperatorType, name: string}[] = [
  {value: ConditionOperatorEnum.Equals, name: 'Equals'},
  {value: ConditionOperatorEnum.NotEqual, name: 'Not equal'},
  {value: ConditionOperatorEnum.GreaterThan, name: 'Later than'},
  {value: ConditionOperatorEnum.GreaterOrEqualThan, name: 'Later or equals'},
  {value: ConditionOperatorEnum.LessThan, name: 'Earlier than'},
  {value: ConditionOperatorEnum.LessOrEqualThan, name: 'Earlier or equals'}
];

export const numberOperators = [
  {value: ConditionOperatorEnum.Equals, name: 'Equals'},
  {value: ConditionOperatorEnum.NotEqual, name: 'Not equal'},
  {value: ConditionOperatorEnum.GreaterThan, name: 'Greater than'},
  {value: ConditionOperatorEnum.GreaterOrEqualThan, name: 'Greater or equals'},
  {value: ConditionOperatorEnum.LessThan, name: 'Less than'},
  {value: ConditionOperatorEnum.LessOrEqualThan, name: 'Less or equals'}
];

export const stringOperators = [
  {value: ConditionOperatorEnum.Equals, name: 'Equals'},
  {value: ConditionOperatorEnum.NotEqual, name: 'Not equal'},
  {value: ConditionOperatorEnum.Contains, name: 'Contains'},
  {value: ConditionOperatorEnum.NotContain, name: 'Not contain'}
];


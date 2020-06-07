import {ConditionOperatorEnum} from '../../swagger/models/condition-operator-enum';

export const dateOperators = [
  {value: ConditionOperatorEnum.Equals, name: 'Equals'},
  {value: ConditionOperatorEnum.GreaterThan, name: 'Later than'},
  {value: ConditionOperatorEnum.GreaterOrEqualThan, name: 'Later or equals'},
  {value: ConditionOperatorEnum.LessThan, name: 'Earlier than'},
  {value: ConditionOperatorEnum.LessOrEqualThan, name: 'Earlier or equals'},
  {value: ConditionOperatorEnum.Not, name: 'Not'}
];

export const numberOperators = [
  {value: ConditionOperatorEnum.Equals, name: 'Equals'},
  {value: ConditionOperatorEnum.GreaterThan, name: 'Greater than'},
  {value: ConditionOperatorEnum.GreaterOrEqualThan, name: 'Greater or equals'},
  {value: ConditionOperatorEnum.LessThan, name: 'Less than'},
  {value: ConditionOperatorEnum.LessOrEqualThan, name: 'Less or equals'},
  {value: ConditionOperatorEnum.Not, name: 'Not'}
];

export const stringOperators = [
  {value: ConditionOperatorEnum.Equals, name: 'Equals'},
  {value: ConditionOperatorEnum.Contains, name: 'Contains'},
  {value: ConditionOperatorEnum.Like, name: 'Like'},
  {value: ConditionOperatorEnum.Not, name: 'Not'}
];


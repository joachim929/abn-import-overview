import {ConditionOperatorEnum} from '../../swagger/models/condition-operator-enum';

export const dateOperators = [
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
  {value: ConditionOperatorEnum.NotContain, name: 'Not contain'},
  {value: ConditionOperatorEnum.Like, name: 'Like'},
  {value: ConditionOperatorEnum.NotLike, name: 'Not like'},
];


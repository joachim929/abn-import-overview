/* tslint:disable */
export interface CreateLogicDto {
  conditionOperator: 'equals' | 'greaterThan' | 'greaterorEqualThan' | 'lessThan' | 'lessOrEqualThan' | 'contains' | 'not' | 'like';
  name: string;
  values: Array<string>;
}

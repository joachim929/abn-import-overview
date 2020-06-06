/* tslint:disable */
import { LogicValueDto } from './logic-value-dto';
export interface LogicDto {
  conditionOperator: 'equals' | 'greaterThan' | 'greaterorEqualThan' | 'lessThan' | 'lessOrEqualThan' | 'contains' | 'not' | 'like';
  id: string;
  name: string;
  values: Array<LogicValueDto>;
}

/* tslint:disable */
import { LogicValue } from './logic-value';
import { TransferCondition } from './transfer-condition';
export interface Logic {
  amountPassed: number;
  amountUsed: number;
  andCondition: TransferCondition;
  conditionOperator: 'equals' | 'greaterThan' | 'greaterorEqualThan' | 'lessThan' | 'lessOrEqualThan' | 'contains' | 'not' | 'like';
  createdAt: string;
  editedAt: string;
  id: string;
  name: string;
  orCondition: TransferCondition;
  passDifficulty: number;
  values: Array<LogicValue>;
}

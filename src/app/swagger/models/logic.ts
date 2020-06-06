/* tslint:disable */
import { LogicValue } from './logic-value';
import { TransferCondition } from './transfer-condition';
export interface Logic {
  amountPassed: number;
  amountUsed: number;
  andCondition: TransferCondition;
  conditionOperator: 'Equals' | 'GreaterThan' | 'GreaterOrEqualThan' | 'LessThan' | 'LessOrEqualThan' | 'Contains' | 'Not' | 'Like';
  createdAt: string;
  editedAt: string;
  id: string;
  name: string;
  orCondition: TransferCondition;
  passDifficulty: number;
  transferKey: 'Amount' | 'Description' | 'TransactionDate' | 'CurrencyCode' | 'AccountNumber' | 'StartBalance' | 'EndBalance';
  values: Array<LogicValue>;
}

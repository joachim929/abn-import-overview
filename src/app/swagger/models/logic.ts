/* tslint:disable */
import { TransferCondition } from './transfer-condition';
export interface Logic {
  amountPassed: number;
  amountUsed: number;
  andCondition: TransferCondition;
  conditionOperator: 'Equals' | 'GreaterThan' | 'GreaterOrEqualThan' | 'LessThan' | 'LessOrEqualThan' | 'Contains' | 'Not' | 'Like';
  createdAt: string;
  editedAt: string;
  id: string;
  orCondition: TransferCondition;
  passDifficulty: number;
  transferKey: 'Amount' | 'Description' | 'TransactionDate' | 'CurrencyCode' | 'AccountNumber' | 'StartBalance' | 'EndBalance';
  values: string;
}

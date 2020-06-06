/* tslint:disable */
import { CategoryDto } from './category-dto';
import { LogicDto } from './logic-dto';
export interface CreateTransferConditionDto {
  andLogic: Array<LogicDto>;
  autoAssign?: boolean;
  category: CategoryDto;
  description?: string;
  name: string;
  orLogic: Array<LogicDto>;
  transferKey: 'amount' | 'description' | 'transactionDate' | 'currencyCode' | 'accountNumber' | 'startBalance' | 'endBalance';
  type: 'String' | 'Number' | 'Date';
}

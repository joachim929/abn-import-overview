/* tslint:disable */
import { ConditionOperatorEnum } from './condition-operator-enum';
import { TransferKeyEnum } from './transfer-key-enum';
export interface CreateLogicDto {
  andCondition?: {  };
  conditionOperator: ConditionOperatorEnum;
  name: string;
  orCondition?: {  };
  transferKey: TransferKeyEnum;
  type: 'String' | 'Number' | 'Date';
  value: string;
}

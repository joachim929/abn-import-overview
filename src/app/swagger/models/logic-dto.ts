/* tslint:disable */
import { ConditionOperatorEnum } from './condition-operator-enum';
import { TransferKeyEnum } from './transfer-key-enum';
export interface LogicDto {
  andCondition: {  };
  conditionOperator: ConditionOperatorEnum;
  id: string;
  name: string;
  orCondition: {  };
  transferKey: TransferKeyEnum;
  type: 'String' | 'Number' | 'Date';
  value: string;
}

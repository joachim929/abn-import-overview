/* tslint:disable */
import { ConditionOperatorEnum } from './condition-operator-enum';
import { TransferKeyEnum } from './transfer-key-enum';
export interface LogicDto {
  conditionOperator: ConditionOperatorEnum;
  id: string;
  transferKey: TransferKeyEnum;
  type: 'String' | 'Number' | 'Date';
  value: string;
}

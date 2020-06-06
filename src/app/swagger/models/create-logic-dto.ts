/* tslint:disable */
import { ConditionOperatorEnum } from './condition-operator-enum';
import { TransferKeyEnum } from './transfer-key-enum';
export interface CreateLogicDto {
  conditionOperator: ConditionOperatorEnum;
  name: string;
  transferKey: TransferKeyEnum;
  values: Array<string>;
}

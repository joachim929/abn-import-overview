/* tslint:disable */
import { ConditionOperatorEnum } from './condition-operator-enum';
import { LogicValueDto } from './logic-value-dto';
import { TransferKeyEnum } from './transfer-key-enum';
export interface LogicDto {
  conditionOperator: ConditionOperatorEnum;
  id: string;
  name: string;
  transferKey: TransferKeyEnum;
  values: Array<LogicValueDto>;
}

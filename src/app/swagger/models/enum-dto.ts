/* tslint:disable */
import { ConditionOperatorEnum } from './condition-operator-enum';
import { DateOperatorsEnum } from './date-operators-enum';
import { LogicTypeEnum } from './logic-type-enum';
import { NumberOperatorsEnum } from './number-operators-enum';
import { StringOperatorsEnum } from './string-operators-enum';
import { TransferKeyEnum } from './transfer-key-enum';
export interface EnumDto {
  conditionOperatorEnum: ConditionOperatorEnum;
  dateOperatorsEnum: DateOperatorsEnum;
  logicTypeEnum: LogicTypeEnum;
  numberOperatorsEnum: NumberOperatorsEnum;
  stringOperatorsEnum: StringOperatorsEnum;
  transferKeyEnum: TransferKeyEnum;
}

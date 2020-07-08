/* tslint:disable */
import { Cat } from './cat';
import { ConditionOperatorEnum } from './condition-operator-enum';
import { DateOperatorsEnum } from './date-operators-enum';
import { Dog } from './dog';
import { LogicTypeEnum } from './logic-type-enum';
import { NumberOperatorsEnum } from './number-operators-enum';
import { StringOperatorsEnum } from './string-operators-enum';
import { TransferKeyEnum } from './transfer-key-enum';
export interface EnumDto {
  cat: Cat;
  conditionOperatorEnum: ConditionOperatorEnum;
  dateOperatorsEnum: DateOperatorsEnum;
  dog: Dog;
  logicTypeEnum: LogicTypeEnum;
  numberOperatorsEnum: NumberOperatorsEnum;
  pet: {  };
  pets: Cat | Dog;
  stringOperatorsEnum: StringOperatorsEnum;
  transferKeyEnum: TransferKeyEnum;
}

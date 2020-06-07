/* tslint:disable */
import { CategoryDto } from './category-dto';
import { LogicDto } from './logic-dto';
import { LogicEnum } from './logic-enum';
export interface CreateTransferConditionDto {
  andLogic: Array<LogicDto>;
  autoAssign?: boolean;
  category: CategoryDto;
  description?: string;
  name: string;
  orLogic: Array<LogicDto>;
  type: LogicEnum;
}
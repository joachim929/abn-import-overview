/* tslint:disable */
import { CategoryDto } from './category-dto';
import { LogicDto } from './logic-dto';
export interface TransferConditionDto {
  andLogic: Array<LogicDto>;
  autoAssign?: boolean;
  category: CategoryDto;
  description?: string;
  id: string;
  name: string;
  orLogic: Array<LogicDto>;
}

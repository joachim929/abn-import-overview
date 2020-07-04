/* tslint:disable */
import { Category } from './category';
import { Logic } from './logic';
export interface TransferCondition {
  andLogic: Array<Logic>;
  autoAssign: boolean;
  category: Category;
  createdAt: string;
  description: string;
  editedAt: string;
  id: string;
  name: string;
  orLogic: Array<Logic>;
}

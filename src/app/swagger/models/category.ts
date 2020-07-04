/* tslint:disable */
import { CategoryGroup } from './category-group';
import { TransferCondition } from './transfer-condition';
import { TransferMutation } from './transfer-mutation';
export interface Category {
  categoryGroup: CategoryGroup;
  createdAt: string;
  description: string;
  editedAt: string;
  id: number;
  mutations: Array<TransferMutation>;
  name: string;
  order: number;
  rules: Array<TransferCondition>;
}

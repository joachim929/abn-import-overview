/* tslint:disable */
import { CategoryGroup } from './category-group';
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
}

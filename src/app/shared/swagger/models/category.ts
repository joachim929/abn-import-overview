/* tslint:disable */
import { CategoryGroup } from './category-group';
export interface Category {
  categoryGroup: CategoryGroup;
  categoryGroupId: number;
  createdAt: string;
  description: string;
  editedAt: string;
  id: number;
  name: string;
}

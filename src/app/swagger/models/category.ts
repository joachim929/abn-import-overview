/* tslint:disable */
import { CategoryGroup } from './category-group';
export interface Category {
  categoryGroup: CategoryGroup;
  createdAt: string;
  description: string;
  editedAt: string;
  id: number;
  name: string;
  order: number;
}

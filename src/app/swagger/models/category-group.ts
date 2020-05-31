/* tslint:disable */
import { Category } from './category';
export interface CategoryGroup {
  categories: Array<Category>;
  createdAt: string;
  description: string;
  editedAt: string;
  id: string;
  name: string;
}

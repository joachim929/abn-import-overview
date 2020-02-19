/* tslint:disable */
import { Category } from './category';
import { User } from './user';
export interface CategoryGroup {
  categories: Array<Category>;
  createdAt: string;
  description: string;
  editedAt: string;
  id: number;
  name: string;
  user: User;
  userId: number;
}

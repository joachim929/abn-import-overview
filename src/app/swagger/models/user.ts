/* tslint:disable */
import { CategoryGroup } from './category-group';
import { Invoice } from './invoice';
export interface User {
  categoryGroups: Array<CategoryGroup>;
  email: string;
  id: number;
  invoices: Array<Invoice>;
  password: string;
  userName: string;
}

/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface CategoryGroupDto {
  categories?: Array<CategoryDto>;
  description?: string;
  id?: number;
  name?: string;
  userId?: number;
}

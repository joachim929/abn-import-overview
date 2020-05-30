/* tslint:disable */
import { CategoryGroupDto } from './category-group-dto';
export interface CreateCategoryDto {
  description?: string;
  name: string;
  order: number;
  parent?: CategoryGroupDto;
  parentId?: string;
}

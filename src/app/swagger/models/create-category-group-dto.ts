/* tslint:disable */
import { CreateCategoryDto } from './create-category-dto';
export interface CreateCategoryGroupDto {
  categories?: Array<CreateCategoryDto>;
  description?: string;
  name: string;
}

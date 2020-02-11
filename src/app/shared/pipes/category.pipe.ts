import { Pipe, PipeTransform } from '@angular/core';
import {Category} from '../../import/services/category.service';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Category, ...args: any[]): any {
    return `Category: ${value.category} | Sub-category ${value.subCategory}`;
  }

}

import {Injectable} from '@angular/core';

/**
 * @deprecated
 */
export interface Category {
  id?: number;
  category: string;
  subCategory: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    {id: 1, category: 'Smokes', subCategory: 'Smokes'},
    {id: 2, category: 'Groceries', subCategory: 'Food'}
  ];

  constructor() {
  }

  getCategoryById(id: number): Category | null {
    let requestedCategory = null;
    for (const category of this.categories) {
      if (category.id === id) {
        requestedCategory = category;
        break;
      }
    }

    return requestedCategory;
  }

  addCategory(category: Category): void {
    if (category.id) {
      this.categories.push(category);
    } else {
      const usedNumbers = [];
      for (const _category of this.categories) {
        usedNumbers.push(_category.id);
      }

      category.id = this.getNewId(usedNumbers, 1);
      this.categories.push(category);
    }
  }

  removeCategory(category: Category): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (category.id === this.categories[i].id) {
        this.categories.splice(i, 1);
      }
    }
  }

  editCategory(category: Category): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (category.id === this.categories[i].id) {
        this.categories[i] = category;
      }
    }
  }

  private getNewId(numbersArray: number[], i: number) {
    let newId = numbersArray[numbersArray.length - 1] + i;
    if (numbersArray.includes(newId)) {
      i++;
      newId = this.getNewId(numbersArray, i);
    }

    return newId;
  }
}

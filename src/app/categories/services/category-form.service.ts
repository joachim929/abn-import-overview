import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryGroupDto} from '../../swagger/models/category-group-dto';
import {CategoryDto} from '../../swagger/models/category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryFormService {

  constructor() {
  }

  movedItemInFormArray(formArray: FormArray, previousIndex: number, currentIndex: number) {
    const movedControl = formArray.at(previousIndex);
    formArray.removeAt(previousIndex);
    formArray.insert(currentIndex, movedControl);
  }

  transferFormArrayItem(previousGroup, currentGroup, previousIndex, currentIndex) {
    const movedControl = (previousGroup.get('categories') as FormArray).at(previousIndex);
    (previousGroup.get('categories') as FormArray).removeAt(previousIndex);
    (currentGroup.get('categories') as FormArray).insert(currentIndex, movedControl);
  }

  buildCategoryGroupFormGroup(categoryGroup: CategoryGroupDto): FormGroup {
    return new FormGroup({
      id: new FormControl(categoryGroup.id),
      name: new FormControl(categoryGroup.name, [
        Validators.minLength(3),
        Validators.required,
        Validators.maxLength(255)
      ]),
      description: new FormControl(categoryGroup.description),
      categories: this.buildCategoryFormArray(categoryGroup.categories)
    });
  }

  private buildCategoryFormArray(categories: CategoryDto[]): FormArray {
    const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
    return new FormArray(categories.map(category => this.buildCategoryFormGroup(category)));
  }

  private buildCategoryFormGroup(category: CategoryDto): FormGroup {
    return new FormGroup({
      categoryGroupId: new FormControl(category.categoryGroupId),
      description: new FormControl(category.description),
      id: new FormControl(category.id),
      name: new FormControl(category.name, [
        Validators.minLength(3),
        Validators.required,
        Validators.maxLength(255)
      ]),
      order: new FormControl(category.order)
    });
  }
}
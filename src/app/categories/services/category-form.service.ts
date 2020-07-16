import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryDto} from '../../swagger/models/category-dto';
import {CategoryGroupResource} from '../../swagger/models/category-group-resource';

@Injectable()
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

  buildCategoryGroupFormGroup(categoryGroup: CategoryGroupResource): FormGroup {
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

  // todo: Fix once CategoryDTO has been removed
  private buildCategoryFormArray(categories: any[]): FormArray {
    return new FormArray(categories.map(category => this.buildCategoryFormGroup(category)));
  }

  private buildCategoryFormGroup(category: CategoryDto): FormControl {
    return new FormControl({
      description: category.description,
      id: category.id,
      name: category.name,
      order: category.order
    });
  }
}

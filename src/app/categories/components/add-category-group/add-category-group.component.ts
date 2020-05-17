import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryDataStore} from '../../../core/services/category-data.store';

@Component({
  selector: 'app-add-category-group',
  templateUrl: './add-category-group.component.html',
  styleUrls: ['./add-category-group.component.scss']
})
export class AddCategoryGroupComponent implements OnInit {
  nameValidators = [
    Validators.minLength(3),
    Validators.maxLength(250)
  ];
  form = new FormGroup({
    name: new FormControl(null, [...this.nameValidators, Validators.required]),
    description: new FormControl(null),
    categories: new FormArray([])
  });

  constructor(
    private categoryDataStore: CategoryDataStore
  ) {
  }

  ngOnInit(): void {
    (this.form.get('categories') as FormArray).push(this.getNewSubCategory());
  }

  getSubCategories(): FormGroup[] {
    return (this.form.get('categories') as FormArray).controls as FormGroup[];
  }

  addSubCategory() {
    const categoriesArray = this.form.get('categories') as FormArray;
    if (categoriesArray.length === 0 || categoriesArray.at(categoriesArray.length - 1).valid) {
      categoriesArray.push(this.getNewSubCategory());
    } else {
      categoriesArray.at(categoriesArray.length - 1).get('name').markAsTouched();
    }
  }

  removeSubCategory(index: number) {
    (this.form.get('categories') as FormArray).removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      if (this.form.get('categories').value) {
        this.form.value.categories = this.removeEmptySubCategories(this.form.get('categories') as FormArray).value;
      }

      this.categoryDataStore.createCategory(this.form.value);
    }
  }

  private removeEmptySubCategories(subCategories: FormArray): FormArray {
    const filteredArray = new FormArray([]);
    subCategories.controls.map((control) => {
      if (control.value && control.value.name && control.get('name').valid) {
        filteredArray.push(control);
      }
    });
    return filteredArray;
  }

  private getNewSubCategory(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, this.nameValidators),
      description: new FormControl(null)
    });
  }

}

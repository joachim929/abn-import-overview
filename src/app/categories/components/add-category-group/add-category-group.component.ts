import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category-group',
  templateUrl: './add-category-group.component.html',
  styleUrls: ['./add-category-group.component.scss']
})
export class AddCategoryGroupComponent implements OnInit {
  nameValidators = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(250)
  ];
  form = new FormGroup({
    name: new FormControl(null, this.nameValidators),
    description: new FormControl(null),
    categories: new FormArray([])
  });

  constructor() {
  }

  ngOnInit(): void {
    (this.form.get('categories') as FormArray).push(this.getNewSubCategory());
  }

  getSubCategories(): FormGroup[] {
    return (this.form.get('categories') as FormArray).controls as FormGroup[];
  }

  addSubCategory() {
    const categoriesArray = this.form.get('categories') as FormArray;
    if (categoriesArray.at(categoriesArray.length - 1).valid) {
      categoriesArray.push(this.getNewSubCategory());
    } else {
      categoriesArray.at(categoriesArray.length - 1).get('name').markAsTouched();
    }
  }

  private getNewSubCategory(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, this.nameValidators),
      description: new FormControl(null)
    });
  }

}

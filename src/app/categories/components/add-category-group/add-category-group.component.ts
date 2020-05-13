import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category-group',
  templateUrl: './add-category-group.component.html',
  styleUrls: ['./add-category-group.component.scss']
})
export class AddCategoryGroupComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    categories: new FormArray([])
  });

  constructor() {
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((next) => console.log(next));
    (this.form.get('categories') as FormArray).push(new FormControl(null, [Validators.required]));
  }

  getSubCategories(): FormArray {
    return this.form.get('categories') as FormArray;
  }

  addSubCategory() {
    const categoriesArray = this.form.get('categories') as FormArray;
    if (categoriesArray.at(categoriesArray.length - 1).valid) {
      categoriesArray.push(new FormControl(null, [Validators.required]));
    } else {
      categoriesArray.at(categoriesArray.length - 1).markAsDirty();
    }
  }

}

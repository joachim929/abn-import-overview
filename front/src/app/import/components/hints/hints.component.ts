import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category, CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss']
})
export class HintsComponent implements OnInit {
  hintForm: FormGroup;

  descriptionOptions = [
    'Contains', 'Doesn\'t contain'
  ];

  amountOptions = [
    'greaterThan', 'lessThan', 'equalTo'
  ];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  // todo: Have formGroup in array with 2 controls instead of 4 seperate formArrays
  ngOnInit() {
    this.hintForm = new FormGroup({
      amount: new FormArray([
        new FormControl()
      ]),
      amountLogic: new FormArray([
        new FormControl()
      ]),
      description: new FormArray([
        new FormControl()
      ]),
      descriptionLogic: new FormArray([
        new FormControl()
      ]),
      category: new FormControl(null, [
        Validators.required
      ])
    });
  }

  get amountControls(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('amount')).controls;
  }

  get amountLogic(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('amountLogic')).controls;
  }

  get descriptionLogic(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('descriptionLogic')).controls;
  }

  get description(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('description')).controls;
  }

  get categories(): Category[] {
    return this.categoryService.categories;
  }

  addAmountRule() {
    (<FormArray>this.hintForm.get('amountLogic')).push(new FormControl);
    (<FormArray>this.hintForm.get('amount')).push(new FormControl);
  }

  addDescriptionRule() {
    (<FormArray>this.hintForm.get('descriptionLogic')).push(new FormControl);
    (<FormArray>this.hintForm.get('description')).push(new FormControl);
  }
}

import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
    'Greater than', 'Less than', 'Equal to'
  ];

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
  }

  // todo: Have formGroup in array with 2 controls instead of 4 seperate formArrays
  ngOnInit() {
    this.hintForm = new FormGroup({
      amount: new FormArray([
        new FormGroup({
          rule: new FormControl(),
          value: new FormControl()
        })
      ]),
      description: new FormArray([
        new FormGroup({
          rule: new FormControl(),
          value: new FormControl()
        })
      ]),
      category: new FormControl(null, [
        Validators.required
      ])
    });
  }

  getControls(form: FormGroup, name): FormGroup[] {
    return <FormGroup[]>(<FormArray>form.get(name)).controls;
  }

  getControl(form: FormGroup, name) {
    return <FormControl>form.get(name);
  }

  get amountControls(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('amount')).controls;
  }

  get description(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('description')).controls;
  }

  get categories(): Category[] {
    return this.categoryService.categories;
  }

  addAmountRule() {
    const controls = (<FormArray>this.hintForm.get('amount')).controls;
    (<FormGroup>controls[controls.length - 1]).addControl('andOr', new FormControl());
    (<FormArray>this.hintForm.get('amount')).push(new FormGroup({
      rule: new FormControl(),
      value: new FormControl()
    }));
  }

  addDescriptionRule() {
    const controls = (<FormArray>this.hintForm.get('description')).controls;
    (<FormGroup>controls[controls.length - 1]).addControl('andOr', new FormControl());
    (<FormArray>this.hintForm.get('description')).push(new FormGroup({
      rule: new FormControl(),
      value: new FormControl()
    }));
  }
}

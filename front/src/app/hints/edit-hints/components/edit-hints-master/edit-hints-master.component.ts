import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {Category, CategoryService} from '../../../../import/services/category.service';

@Component({
  selector: 'app-edit-hints-master',
  templateUrl: './edit-hints-master.component.html',
  styleUrls: ['./edit-hints-master.component.scss']
})
export class EditHintsMasterComponent implements OnInit {
  hintForm: FormGroup;

  descriptionOptions = [
    'Contains', 'Doesn\'t contain'
  ];

  amountOptions = [
    'Greater than', 'Less than', 'Equal to'
  ];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  // todo: Have formGroup in array with 2 controls instead of 4 seperate formArrays
  ngOnInit() {
    this.hintForm = new FormGroup({
      amount: new FormArray([
        new FormGroup({
          rule: new FormControl(),
          value: new FormControl()
        }, {validators: bothEmptyOrFilledValidator})
      ]),
      description: new FormArray([
        new FormGroup({
          rule: new FormControl(),
          value: new FormControl()
        }, {validators: bothEmptyOrFilledValidator})
      ]),
      categoryId: new FormControl(null, [
        Validators.required
      ]),
      autoAssign: new FormControl()
    }, {validators: oneNotEmpty});
  }

  getControls(form: FormGroup, name): FormGroup[] {
    return <FormGroup[]>(<FormArray>form.get(name)).controls;
  }

  getArray(form: FormGroup, name): FormArray {
    return <FormArray>form.get(name);
  }

  get description(): AbstractControl[] {
    return (<FormArray>this.hintForm.get('description')).controls;
  }

  get categories(): Category[] {
    return this.categoryService.categories;
  }

  addAmountRule() {
    const controls = (<FormArray>this.hintForm.get('amount')).controls;
    if (controls.length !== 0) {
      (<FormGroup>controls[controls.length - 1]).addControl('andOr', new FormControl());
    }
    (<FormArray>this.hintForm.get('amount')).push(new FormGroup({
      rule: new FormControl(),
      value: new FormControl()
    }));
  }

  addDescriptionRule() {
    const controls = (<FormArray>this.hintForm.get('description')).controls;
    if (controls.length !== 0) {
      (<FormGroup>controls[controls.length - 1]).addControl('andOr', new FormControl());
    }
    (<FormArray>this.hintForm.get('description')).push(new FormGroup({
      rule: new FormControl(),
      value: new FormControl()
    }));
  }

  removeRule(index: number, name: string) {
    const array = this.getArray(this.hintForm, name);
    if (index >= array.controls.length - 1 && <FormGroup>array.controls[index - 1]) {
      (<FormGroup>array.controls[index - 1]).removeControl('andOr')
    }
    array.removeAt(index);
  }
}

export const bothEmptyOrFilledValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const rule = control.get('rule');
  const value = control.get('value');

  return rule && value &&
  ((!!rule.value && !!value.value) || (!rule.value && !value.value)) ? null : {'bothEmptyOrFilled': true} ;
};

export const oneNotEmpty: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const amount = <FormArray>control.get('amount');
  const description = <FormArray>control.get('description');
  return (amount && amount.controls.length > 0) || (description && description.controls.length > 0) ?
    null : {'oneNotEmpty': true};
};

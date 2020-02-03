import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category, CategoryService} from '../../../import/services/category.service';

@Component({
  selector: 'app-hint-master',
  templateUrl: './hint-master.component.html',
  styleUrls: ['./hint-master.component.scss']
})
export class HintMasterComponent implements OnInit {
  hintForm: FormGroup;
  cards = {
    imports: {
      collapse: true,
      collapsing: false,
      show: true
    },
    create: {
      collapse: true,
      collapsing: false,
      show: false
    },
  };

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
        })
      ]),
      description: new FormArray([
        new FormGroup({
          rule: new FormControl(),
          value: new FormControl()
        })
      ]),
      categoryId: new FormControl(null, [
        Validators.required
      ]),
      autoAssign: new FormControl()
    });
  }

  getControls(form: FormGroup, name): FormGroup[] {
    return <FormGroup[]>(<FormArray>form.get(name)).controls;
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

  toggleCard(name: string): void {
    this.cards[name].collapse = false;
    // this.cards[name].collapsing = true;
    if (this.cards[name].show) {
      this.cards[name].show = false;
      setTimeout(() => {
        this.cards[name].collapse = true;
        // this.cards[name].collapsing = false;
      }, 350);
    } else {
      setTimeout(() => {
        this.cards[name].collapse = true;
        // this.cards[name].collapsing = false;
        this.cards[name].show = true;
      }, 350);
    }
  }
}

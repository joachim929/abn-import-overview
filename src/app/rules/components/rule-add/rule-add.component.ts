import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {minLengthThisOrThat} from '../../shared/rules-custom.validators';

@Component({
  selector: 'app-rule-add',
  templateUrl: './rule-add.component.html',
  styleUrls: ['./rule-add.component.scss']
})
export class RuleAddComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    autoAssign: new FormControl(),
    name: new FormControl('', [Validators.required]), // async for unique name
    category: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    orLogic: new FormArray([
      new FormControl()
    ]),
    andLogic: new FormArray([
      new FormControl()
    ])
  });
  unSub = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
    this.form.get('orLogic').setValidators(minLengthThisOrThat(this.form.get('andLogic') as FormArray));
    this.form.get('andLogic').setValidators(minLengthThisOrThat(this.form.get('orLogic') as FormArray));
    this.form.valueChanges.pipe(
      takeUntil(this.unSub)
    ).subscribe((next) => {
      this.form.get('orLogic').updateValueAndValidity({emitEvent: false});
      this.form.get('andLogic').updateValueAndValidity({emitEvent: false});
    });
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  getFormArrayControls(name: string): FormControl[] {
    return (this.form.get(name) as FormArray).controls as FormControl[];
  }

  addCondition(name: 'andLogic' | 'orLogic'): void {
    (this.form.get(name) as FormArray).push(new FormControl());
  }

  removeLogic(name: 'andLogic' | 'orLogic', index: number): void {
    (this.form.get(name) as FormArray).removeAt(index);
  }

}

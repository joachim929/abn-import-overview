import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {minLengthThisOrThat} from '../../shared/rules-custom.validators';
import {RulesLogicService} from '../../services/rules-logic.service';
import {RulesDataStore} from '../../../core/services/rules-data.store';

@Component({
  selector: 'app-rule-add',
  templateUrl: './rule-add.component.html',
  styleUrls: ['./rule-add.component.scss']
})
export class RuleAddComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    autoAssign: new FormControl(),
    name: new FormControl('', [Validators.required]), // async for unique name
    category: new FormControl(null, [Validators.required, Validators.nullValidator]),
    description: new FormControl(),
    orLogic: new FormArray([
      new FormControl()
    ]),
    andLogic: new FormArray([
      new FormControl()
    ])
  });
  unSub = new Subject<void>();
  isSaving$: Observable<boolean>;

  constructor(
    private rulesLogicService: RulesLogicService,
    private rulesDataStore: RulesDataStore
  ) {
  }

  ngOnInit(): void {
    this.isSaving$ = this.rulesDataStore.getIsSaving();
    this.form.get('orLogic').setValidators(minLengthThisOrThat(this.form.get('andLogic') as FormArray));
    this.form.get('andLogic').setValidators(minLengthThisOrThat(this.form.get('orLogic') as FormArray));
    this.form.valueChanges.pipe(
      takeUntil(this.unSub)
    ).subscribe(() => {
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
    this.form.get(name).markAsDirty();
  }

  removeLogic(name: 'andLogic' | 'orLogic', index: number): void {
    (this.form.get(name) as FormArray).removeAt(index);
  }

  save() {
    if (this.form.valid) {
      this.rulesLogicService.save(this.form.value);
    }
    this.form.markAllAsTouched();
    this.form.get('andLogic').markAsDirty();
    this.form.get('orLogic').markAsDirty();
  }

}

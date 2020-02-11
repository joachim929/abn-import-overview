import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rule-logic',
  templateUrl: './rule-logic.component.html',
  styleUrls: ['./rule-logic.component.scss']
})
export class RuleLogicComponent implements OnInit {
  @Input() label?: string;
  @Input() array: FormArray;
  @Input() ruleOptions: any[];
  @Input() valueType: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeLogicEntry(index: number) {
    this.array.removeAt(index);
    const arrayLength = this.array.controls.length;
    if (arrayLength > 0 && this.array.at(arrayLength - 1).get('andOr')) {
      (this.array.at(arrayLength - 1) as FormGroup).removeControl('andOr');
    }
  }

  addLogic() {
    if (this.validArray()) {
      const oldLength = this.array.controls.length;
      setTimeout(() => {
        if (oldLength > 0) {
          (this.array.at(oldLength - 1) as FormGroup).addControl('andOr', new FormControl(null, [Validators.required]));
        }
        this.array.controls.push(new FormGroup({
          rule: new FormControl(null, [Validators.required]),
          value: new FormControl(null, [Validators.required])
        }));
      });
    }
  }

  private validArray() {
    const arrLength = this.array.controls.length;
    return arrLength <= 0 ? true : this.array.controls[arrLength - 1].valid;
  }
}

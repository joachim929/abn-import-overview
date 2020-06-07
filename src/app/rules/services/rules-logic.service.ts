import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {dateOperators, numberOperators, stringOperators} from '../shared/rule-logic.constants';

@Injectable({
  providedIn: 'root'
})
export class RulesLogicService {

  constructor() {
  }

  applyValidators(control: FormControl, options): string {
    let inputType = 'text';
    control.clearValidators();

    switch (options) {
      case numberOperators: {
        control.setValidators([
          Validators.required,
          Validators.pattern('^-?\\d+(\\.\\d{1,2})?')
        ]);
        break;
      }
      case stringOperators: {
        control.setValidators([
          Validators.required
        ]);
        break;
      }
      case dateOperators: {
        control.setValidators([
          Validators.required
        ]);
        inputType = 'date';
        break;
      }
      default: {
        break;
      }
    }

    return inputType;
  }
}

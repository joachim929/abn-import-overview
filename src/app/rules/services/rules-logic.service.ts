import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {dateOperators, numberOperators, stringOperators} from '../shared/rule-logic.constants';
import {TransferConditionDto} from '../../swagger/models/transfer-condition-dto';
import {RulesApiService} from '../../swagger/services/rules-api.service';
import {RulesDataStore} from '../../core/services/rules-data.store';

@Injectable()
export class RulesLogicService {

  constructor(
    private rulesApiService: RulesApiService,
    private rulesDataStore: RulesDataStore
  ) {
  }

  applyValidators(control: FormControl, options): string {
    let inputType = 'String';
    control.clearValidators();

    switch (options) {
      case numberOperators: {
        control.setValidators([
          Validators.required,
          Validators.pattern('^-?\\d+(\\.\\d{1,2})?')
        ]);
        inputType = 'Number';
        break;
      }
      case stringOperators: {
        control.setValidators([
          Validators.required
        ]);
        inputType = 'String';
        break;
      }
      case dateOperators: {
        control.setValidators([
          Validators.required
        ]);
        inputType = 'Date';
        break;
      }
      default: {
        break;
      }
    }

    return inputType;
  }

  save(formValue: TransferConditionDto) {
    const filteredValue = {
      ...formValue,
      orLogic: [...formValue.orLogic].filter(item => !!item),
      andLogic: [...formValue.andLogic].filter(item => !!item),
      autoAssign: !!formValue.autoAssign
    };
    this.rulesDataStore.addRule(filteredValue);
  }

  delete() {

  }
}

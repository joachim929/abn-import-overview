import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {TransferListParams} from '../../swagger/models/transfer-list-params';

export type InvoiceFilterControlNames =
  'date.from' |
  'date.to' |
  'categories' |
  'minAmount' |
  'maxAmount' |
  'maxAmountToggle' |
  'minAmountToggle';

@Injectable()
export class TransferFilterService {
  names = {
    date: {
      from: 'from',
      to: 'to'
    },
    categories: 'categories',
    minAmount: 'minAmount',
    maxAmount: 'maxAmount',
    assigned: 'assigned'
  };

  constructor() {
  }

  getControl(group: FormGroup, name: InvoiceFilterControlNames): FormControl {
    return group.get(name) as FormControl;
  }

  buildParams(formGroup): TransferListParams {
    return {
      endDate: this.formatDate(this.getControl(formGroup, 'date.to')),
      startDate: this.formatDate(this.getControl(formGroup, 'date.from')),
      skip: 0,
      maxAmount: this.formatNumber(this.getControl(formGroup, 'maxAmount')),
      minAmount: this.formatNumber(this.getControl(formGroup, 'minAmount')),
      categoryId: this.getControl(formGroup, 'categories').value || null,
      limit: 20,
      orderDirection: 'ASC'
    };
  }

  private formatDate(control: FormControl): string {
    return control.value ? moment(control.value).format('x') : null;
  }

  private formatNumber(control: FormControl): number {
    let formattedValue = null;
    if (control.enabled) {
      formattedValue = Number(Number(control.value).toFixed(2));
    }

    return formattedValue;
  }
}

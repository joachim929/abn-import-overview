import {Pipe, PipeTransform} from '@angular/core';
import {AmountRule} from '../../core/interfaces-types/rule.interface';

@Pipe({
  name: 'amountRule'
})
export class AmountRulePipe implements PipeTransform {

  transform(value: AmountRule, ...args: any[]): any {
    return `Item amount is ${value.rule} "${value.value}"${value.andOr ? ' ' + value.andOr : ''}`;
  }
}

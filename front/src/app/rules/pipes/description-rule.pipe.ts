import { Pipe, PipeTransform } from '@angular/core';
import {DescriptionRule} from '../../core/interfaces-types/hint.interface';

@Pipe({
  name: 'descriptionRule'
})
export class DescriptionRulePipe implements PipeTransform {

  transform(value: DescriptionRule, ...args: any[]): any {
    return `Item description ${value.rule} "${value.value}" ${value.andOr ? value.andOr : ''}`;
  }

}

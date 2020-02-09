import { Pipe, PipeTransform } from '@angular/core';
import {Rule} from '../../core/interfaces-types/rule.interface';

@Pipe({
  name: 'itemTitle'
})
export class ItemTitlePipe implements PipeTransform {

  transform(value: Rule, ...args: unknown[]): unknown {
    return 'Rule' + (value.name ? `: ${value.name}` : ' detail');
  }

}

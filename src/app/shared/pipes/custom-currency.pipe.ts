import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value < 0 ? '-\u20AC ' + (value * -1) : '\u20AC ' + value;
  }
}

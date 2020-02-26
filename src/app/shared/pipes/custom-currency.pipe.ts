import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let response = '';
    if (value < 0) {
      response = '- &euro; ' + (value * -1);
    } else {
      response = '&euro; ' + value;
    }
    return response;
  }

}

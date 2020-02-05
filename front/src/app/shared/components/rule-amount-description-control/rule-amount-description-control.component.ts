import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-rule-amount-description-control',
  templateUrl: './rule-amount-description-control.component.html',
  styleUrls: ['./rule-amount-description-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RuleAmountDescriptionControlComponent),
    multi: true
  }]
})
export class RuleAmountDescriptionControlComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() options: any[];
  control = new FormControl();

  constructor() {
    this.control.valueChanges.subscribe((next) => {
      this.registerOnChange(next);
    });
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }
}

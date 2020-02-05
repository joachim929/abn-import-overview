import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-rule-radio-control',
  templateUrl: './rule-radio-control.component.html',
  styleUrls: ['./rule-radio-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RuleRadioControlComponent),
    multi: true
  }]
})
export class RuleRadioControlComponent implements ControlValueAccessor {
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

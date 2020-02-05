import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-rule-name-control',
  templateUrl: './rule-name-control.component.html',
  styleUrls: ['./rule-name-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RuleNameControlComponent),
    multi: true
  }]
})
export class RuleNameControlComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type: string;
  control = new FormControl();

  constructor() {
    this.control.valueChanges.subscribe((next) => {
      this.propagateChange(next);
    });
  }

  propagateChange = (_: any) => {};

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    // do nothing
  }

}

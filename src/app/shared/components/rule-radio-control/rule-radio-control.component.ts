import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-rule-radio-control',
  templateUrl: './rule-radio-control.component.html',
  styleUrls: ['./rule-radio-control.component.scss']
})
export class RuleRadioControlComponent {
  @Input() label: string;
  @Input() options: any[];
  @Input() control: FormControl;

  constructor() {
  }
}

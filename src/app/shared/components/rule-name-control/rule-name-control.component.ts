import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-rule-name-control',
  templateUrl: './rule-name-control.component.html',
  styleUrls: ['./rule-name-control.component.scss']
})
export class RuleNameControlComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() control: FormControl;

  constructor() {
  }

}

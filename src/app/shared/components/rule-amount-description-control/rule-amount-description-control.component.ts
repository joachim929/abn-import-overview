import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-rule-amount-description-control',
  templateUrl: './rule-amount-description-control.component.html',
  styleUrls: ['./rule-amount-description-control.component.scss']
})
export class RuleAmountDescriptionControlComponent {
  @Input() label: string;
  @Input() options: any[];
  @Input() control: FormControl;

  constructor() {}
}

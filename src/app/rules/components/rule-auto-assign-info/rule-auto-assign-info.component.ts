import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rule-auto-assign-info',
  templateUrl: './rule-auto-assign-info.component.html',
})
export class RuleAutoAssignInfoComponent {
  @Input() disabled = false;
}

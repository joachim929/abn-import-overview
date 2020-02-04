import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../core/interfaces-types/hint.interface';

@Component({
  selector: 'app-rule-edit',
  templateUrl: './rule-edit.component.html',
  styleUrls: ['./rule-edit.component.scss']
})
export class RuleEditComponent implements OnInit {
  @Input() rule: Rule

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {RuleService} from '../../../core/services/rule.service';
import {Rule} from '../../../core/interfaces-types/rule.interface';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss']
})
export class RulesListComponent implements OnInit {
  constructor(
    private ruleService: RuleService,
  ) {
  }

  ngOnInit() {
  }

  get rules(): Rule[] {
    return this.ruleService.rules;
  }
}

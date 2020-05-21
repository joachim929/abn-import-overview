import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../core/interfaces-types/rule.interface';
import {RuleService} from '../../../core/services/rule.service';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.scss']
})
export class RuleDetailComponent implements OnInit {
  @Input() rule: Rule;
  showEdit = false;

  constructor(
    private ruleService: RuleService
  ) {
  }

  ngOnInit() {
  }

  getCategoryById(id: number) {
    if (id) {
      // return this.categoryService.getCategoryById(id);
    }
  }

  toggleEdit(): void {
    this.showEdit = !this.showEdit;
  }

  deleteRule(): void {
    this.ruleService.removeRule(this.rule.id);
  }

}

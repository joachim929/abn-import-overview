import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../core/interfaces-types/rule.interface';
import {Category, CategoryService} from '../../../import/services/category.service';
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
    private categoryService: CategoryService,
    private ruleService: RuleService
  ) {
  }

  ngOnInit() {
  }

  getCategoryById(id: number): Category | null {
    return this.categoryService.getCategoryById(id);
  }

  toggleEdit(): void {
    this.showEdit = !this.showEdit;
  }

  deleteRule(): void {
    this.ruleService.removeRule(this.rule.id);
    console.log(this.ruleService.rules);
  }

}

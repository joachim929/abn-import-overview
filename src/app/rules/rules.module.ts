import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RuleAddComponent} from './components/rule-add/rule-add.component';
import {RuleDetailComponent} from './components/rule-detail/rule-detail.component';


@NgModule({
  declarations: [
    RulesMasterComponent,
    RuleAddComponent,
    RuleDetailComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule
  ]
})
export class RulesModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RulesListComponent} from './components/rules-list/rules-list.component';
import {ImportExportRulesComponent} from './components/import-export-rules/import-export-rules.component';
import {RuleDetailComponent} from './components/rule-detail/rule-detail.component';
import {RuleEditComponent} from './components/rule-edit/rule-edit.component';


@NgModule({
  declarations: [
    RulesMasterComponent,
    RulesListComponent,
    ImportExportRulesComponent,
    RuleDetailComponent,
    RuleEditComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule
  ]
})
export class RulesModule {
}

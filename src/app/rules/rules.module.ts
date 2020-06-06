import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RuleAddComponent} from './components/rule-add/rule-add.component';
import {RuleDetailComponent} from './components/rule-detail/rule-detail.component';
import {SharedModule} from '../shared/shared.module';
import { RulesListComponent } from './components/rules-list/rules-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RulesMasterComponent,
    RuleAddComponent,
    RuleDetailComponent,
    RulesListComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class RulesModule {
}

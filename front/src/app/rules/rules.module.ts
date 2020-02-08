import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RulesListComponent} from './components/rules-list/rules-list.component';
import {ImportExportRulesComponent} from './components/import-export-rules/import-export-rules.component';
import {RuleDetailComponent} from './components/rule-detail/rule-detail.component';
import {RuleEditComponent} from './components/rule-edit/rule-edit.component';
import { AmountRulePipe } from './pipes/amount-rule.pipe';
import { DescriptionRulePipe } from './pipes/description-rule.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { ItemTitlePipe } from './pipes/item-title.pipe';


@NgModule({
  declarations: [
    RulesMasterComponent,
    RulesListComponent,
    ImportExportRulesComponent,
    RuleDetailComponent,
    RuleEditComponent,
    AmountRulePipe,
    DescriptionRulePipe,
    ItemTitlePipe
  ],
    imports: [
        CommonModule,
        RulesRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        MatCardModule,
        MatChipsModule,
        MatExpansionModule
    ]
})
export class RulesModule {
}

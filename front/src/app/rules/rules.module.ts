import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RulesListComponent} from './components/rules-list/rules-list.component';
import {RulesActionComponent} from './components/rules-actions/rules-action.component';
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
import { RuleCreateComponent } from './components/rule-create/rule-create.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    RulesMasterComponent,
    RulesListComponent,
    RulesActionComponent,
    RuleDetailComponent,
    RuleEditComponent,
    AmountRulePipe,
    DescriptionRulePipe,
    ItemTitlePipe,
    RuleCreateComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class RulesModule {
}

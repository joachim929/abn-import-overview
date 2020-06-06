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
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { RulesLogicComponent } from './shared/components/rules-logic/rules-logic.component';


@NgModule({
  declarations: [
    RulesMasterComponent,
    RuleAddComponent,
    RuleDetailComponent,
    RulesListComponent,
    RulesLogicComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule
  ]
})
export class RulesModule {
}

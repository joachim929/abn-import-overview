import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FormBaseComponent} from './components/form-base/form-base.component';
import { RuleNameControlComponent } from './components/rule-name-control/rule-name-control.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RuleAmountDescriptionControlComponent } from './components/rule-amount-description-control/rule-amount-description-control.component';
import { RuleRadioControlComponent } from './components/rule-radio-control/rule-radio-control.component';
import { CategoryPipe } from './pipes/category.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    FormBaseComponent,
    RuleNameControlComponent,
    RuleAmountDescriptionControlComponent,
    RuleRadioControlComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    FormBaseComponent,
    RuleNameControlComponent,
    RuleAmountDescriptionControlComponent,
    RuleRadioControlComponent,
    CategoryPipe
  ]
})
export class SharedModule {
}

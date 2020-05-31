import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RuleNameControlComponent} from './components/rule-name-control/rule-name-control.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  RuleAmountDescriptionControlComponent
} from './components/rule-amount-description-control/rule-amount-description-control.component';
import {RuleRadioControlComponent} from './components/rule-radio-control/rule-radio-control.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputComponent} from './components/mat-input/mat-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectGroupsComponent} from './components/mat-select-groups/mat-select-groups.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSelectComponent} from './components/mat-select/mat-select.component';
import {CustomCurrencyPipe} from './pipes/custom-currency.pipe';
import { CategoriesSelectComponent } from './components/categories-select/categories-select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    RuleNameControlComponent,
    RuleAmountDescriptionControlComponent,
    RuleRadioControlComponent,
    MatInputComponent,
    MatSelectGroupsComponent,
    MatSelectComponent,
    CustomCurrencyPipe,
    CategoriesSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    RuleNameControlComponent,
    RuleAmountDescriptionControlComponent,
    RuleRadioControlComponent,
    MatInputComponent,
    MatSelectGroupsComponent,
    MatSelectComponent,
    CustomCurrencyPipe,
    CategoriesSelectComponent
  ]
})
export class SharedModule {
}

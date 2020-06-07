import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
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
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HumanizePipe } from './pipes/humanize.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    MatInputComponent,
    MatSelectGroupsComponent,
    MatSelectComponent,
    CustomCurrencyPipe,
    CategoriesSelectComponent,
    EmptyStateComponent,
    HumanizePipe
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
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    MatInputComponent,
    MatSelectGroupsComponent,
    MatSelectComponent,
    CustomCurrencyPipe,
    CategoriesSelectComponent,
    EmptyStateComponent,
    HumanizePipe
  ]
})
export class SharedModule {
}

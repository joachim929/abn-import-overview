import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvoicesRoutingModule} from './invoices-routing.module';
import {SharedModule} from '../shared/shared.module';
import {InvoicesMasterComponent} from './components/invoices-master/invoices-master.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {InvoiceFilterComponent} from './components/invoice-filter/invoice-filter.component';
import {InvoiceDataService} from './services/invoice-data.service';
import {CustomCurrencyPipe} from '../shared/pipes/custom-currency.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {InvoiceEditService} from './services/invoice-edit.service';
import {InvoiceFilterService} from './services/invoice-filter.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    InvoicesMasterComponent,
    InvoiceFilterComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSliderModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    CustomCurrencyPipe,
    InvoiceDataService,
    InvoiceEditService,
    InvoiceFilterService
  ]
})
export class InvoicesModule {
}

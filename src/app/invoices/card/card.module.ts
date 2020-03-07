import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardRoutingModule} from './card-routing.module';
import {InvoiceDetailComponent} from './components/invoice-detail/invoice-detail.component';
import {SharedModule} from '../../shared/shared.module';
import {CustomCurrencyPipe} from '../../shared/pipes/custom-currency.pipe';
import { CardMasterComponent } from './components/card-master/card-master.component';
import {MatButtonModule} from '@angular/material/button';
import {InvoicesSplitDetailModalComponent} from './components/invoices-split-detail-modal/invoices-split-detail-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {InvoicesEditDetailModalComponent} from './components/invoices-edit-detail-modal/invoices-edit-detail-modal.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    InvoiceDetailComponent,
    CardMasterComponent,
    InvoicesSplitDetailModalComponent,
    InvoicesEditDetailModalComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    CustomCurrencyPipe
  ]
})
export class CardModule {
}

import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import {SharedModule} from '../shared/shared.module';
import { InvoicesMasterComponent } from './components/invoices-master/invoices-master.component';
import {MatButtonModule} from '@angular/material/button';
import {InvoicesService} from './services/invoices.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InvoiceSplitComponent } from './components/invoice-split/invoice-split.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';


@NgModule({
  declarations: [InvoicesMasterComponent, InvoiceSplitComponent, InvoiceDetailComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    InvoicesService,
    CurrencyPipe
  ]
})
export class InvoicesModule { }

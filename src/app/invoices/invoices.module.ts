import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import {SharedModule} from '../shared/shared.module';
import { InvoicesMasterComponent } from './components/invoices-master/invoices-master.component';


@NgModule({
  declarations: [InvoicesMasterComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule
  ]
})
export class InvoicesModule { }

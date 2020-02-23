import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import {SharedModule} from '../shared/shared.module';
import { InvoicesMasterComponent } from './components/invoices-master/invoices-master.component';
import {MatButtonModule} from '@angular/material/button';
import {InvoicesService} from './services/invoices.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [InvoicesMasterComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    InvoicesService
  ]
})
export class InvoicesModule { }

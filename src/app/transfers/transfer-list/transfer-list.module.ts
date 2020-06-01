import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransferListRoutingModule} from './transfer-list-routing.module';
import {TransferListMasterComponent} from './components/list-master/transfer-list-master.component';
import {CustomCurrencyPipe} from '../../shared/pipes/custom-currency.pipe';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedTransferModule} from '../shared/shared-transfer.module';


@NgModule({
  declarations: [TransferListMasterComponent],
  imports: [
    CommonModule,
    TransferListRoutingModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    SharedTransferModule
  ],
  providers: [
    CustomCurrencyPipe
  ]
})
export class TransferListModule {
}

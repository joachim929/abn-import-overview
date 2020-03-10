import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransfersRoutingModule} from './transfers-routing.module';
import {TransfersMasterComponent} from './components/transfers-master/transfers-master.component';
import {TransferDataService} from './services/transfer-data.service';


@NgModule({
  declarations: [
    TransfersMasterComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule
  ],
  providers: [
    TransferDataService
  ]
})
export class TransfersModule {
}

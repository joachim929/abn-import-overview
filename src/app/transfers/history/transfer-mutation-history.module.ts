import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransferMutationHistoryRoutingModule} from './transfer-mutation-history-routing.module';
import {HistoryMasterComponent} from './components/history-master/history-master.component';
import {HistoryDataService} from './services/history-data.service';


@NgModule({
  declarations: [
    HistoryMasterComponent
  ],
  imports: [
    CommonModule,
    TransferMutationHistoryRoutingModule
  ],
  providers: [
    HistoryDataService
  ]
})
export class TransferMutationHistoryModule {
}

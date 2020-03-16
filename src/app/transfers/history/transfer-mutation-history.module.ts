import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransferMutationHistoryRoutingModule} from './transfer-mutation-history-routing.module';
import {HistoryMasterComponent} from './components/history-master/history-master.component';
import {HistoryDataService} from './services/history-data.service';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    HistoryMasterComponent
  ],
  imports: [
    CommonModule,
    TransferMutationHistoryRoutingModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [
    HistoryDataService
  ]
})
export class TransferMutationHistoryModule {
}

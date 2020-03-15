import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardRoutingModule} from './card-routing.module';
import {TransferDetailComponent} from './components/transfer-detail/transfer-detail.component';
import {SharedModule} from '../../shared/shared.module';
import {CustomCurrencyPipe} from '../../shared/pipes/custom-currency.pipe';
import { CardMasterComponent } from './components/card-master/card-master.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {SharedTransferModule} from '../shared/shared-transfer.module';

@NgModule({
  declarations: [
    TransferDetailComponent,
    CardMasterComponent
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
    MatCardModule,
    SharedTransferModule
  ],
  providers: [
    CustomCurrencyPipe
  ]
})
export class CardModule {
}

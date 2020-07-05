import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadMoreComponent} from './components/load-more/load-more.component';
import {MatButtonModule} from '@angular/material/button';
import {TransferEditDetailModalComponent} from './components/transfer-edit-detail-modal/transfer-edit-detail-modal.component';
import {TransferSplitDetailModalComponent} from './components/transfer-split-detail-modal/transfer-split-detail-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {CustomCurrencyPipe} from '../../shared/pipes/custom-currency.pipe';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoadMoreComponent,
    TransferEditDetailModalComponent,
    TransferSplitDetailModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SharedModule,
    TextFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    LoadMoreComponent,
    TransferEditDetailModalComponent,
    TransferSplitDetailModalComponent
  ],
  providers: [
    CustomCurrencyPipe
  ]
})
export class SharedTransferModule {
}

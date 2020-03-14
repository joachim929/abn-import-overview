import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransferRoutingModule} from './transfer-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {TransferDataService} from './services/transfer-data.service';
import {CustomCurrencyPipe} from '../shared/pipes/custom-currency.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {TransferEditService} from './services/transfer-edit.service';
import {TransferFilterService} from './services/transfer-filter.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TransferFilterComponent} from './components/transfer-filter/transfer-filter.component';
import {TransferMasterComponent} from './components/transfer-master/transfer-master.component';


@NgModule({
  declarations: [
    TransferMasterComponent,
    TransferFilterComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSliderModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    CustomCurrencyPipe,
    TransferDataService,
    TransferEditService,
    TransferFilterService
  ]
})
export class TransferModule {
}

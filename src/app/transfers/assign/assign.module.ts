import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignRoutingModule } from './assign-routing.module';
import { AssignComponent } from './components/assign/assign.component';
import {MatCardModule} from '@angular/material/card';
import {AssignTransferDataStore} from './services/assign-transfer-data.store';
import {AssignTransferService} from './services/assign-transfer.service';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AssignComponent
  ],
    imports: [
        CommonModule,
        AssignRoutingModule,
        MatCardModule,
        SharedModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
  providers: [
    AssignTransferDataStore,
    AssignTransferService
  ]
})
export class AssignModule { }

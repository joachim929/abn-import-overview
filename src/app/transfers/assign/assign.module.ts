import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignRoutingModule } from './assign-routing.module';
import { AssignComponent } from './components/assign/assign.component';
import {MatCardModule} from '@angular/material/card';
import {AssignTransferDataStore} from './services/assign-transfer-data.store';
import {AssignTransferService} from './services/assign-transfer.service';


@NgModule({
  declarations: [
    AssignComponent
  ],
  imports: [
    CommonModule,
    AssignRoutingModule,
    MatCardModule
  ],
  providers: [
    AssignTransferDataStore,
    AssignTransferService
  ]
})
export class AssignModule { }

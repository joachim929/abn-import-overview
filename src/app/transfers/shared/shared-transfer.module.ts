import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    LoadMoreComponent
  ]
})
export class SharedTransferModule { }

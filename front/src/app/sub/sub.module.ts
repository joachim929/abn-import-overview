import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';
import { SubComponent } from './components/sub/sub.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [SubComponent, TestComponent],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class SubModule { }

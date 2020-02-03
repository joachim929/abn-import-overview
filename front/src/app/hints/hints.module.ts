import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HintFormComponent} from './hint-form/hint-form.component';
import {HintMasterComponent} from './hint-master/hint-master.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HintsRoutingModule} from './hints-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HintFormComponent,
    HintMasterComponent
  ],
  imports: [
    CommonModule,
    HintsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HintsModule {
}

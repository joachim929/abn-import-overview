import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditHintsMasterComponent} from './components/edit-hints-master/edit-hints-master.component';
import {EditHintsRoutingModule} from './edit-hints-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [EditHintsMasterComponent],
  imports: [
    CommonModule,
    EditHintsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EditHintsModule {
}

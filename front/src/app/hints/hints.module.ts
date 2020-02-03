import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HintFormComponent} from './components/hint-form/hint-form.component';
import {HintMasterComponent} from './components/hint-master/hint-master.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HintsRoutingModule} from './hints-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ImportExportComponent } from './components/import-export/import-export.component';

@NgModule({
  declarations: [
    HintFormComponent,
    HintMasterComponent,
    ImportExportComponent
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HintMasterComponent} from './components/hint-master/hint-master.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HintsRoutingModule} from './hints-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ImportExportComponent } from './components/import-export/import-export.component';
import { HintsNavComponent } from './components/hints-nav/hints-nav.component';

@NgModule({
  declarations: [
    HintMasterComponent,
    ImportExportComponent,
    HintsNavComponent
  ],
  imports: [
    CommonModule,
    HintsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SharedModule
  ]
})
export class HintsModule {
}

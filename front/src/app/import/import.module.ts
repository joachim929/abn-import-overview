import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ImportRoutingModule} from './import-routing.module';
import {ImportComponent} from './components/import/import.component';
import {SortDataComponent} from './components/sort-data/sort-data.component';
import {ImportsMasterComponent} from './components/imports-master/imports-master.component';
import {ImportsAssignComponent} from './components/imports-assign/imports-assign.component';
import {ImportsAllComponent} from './components/imports-all/imports-all.component';
import {EditCategoriesComponent} from './components/edit-categories/edit-categories.component';
import {EntryEditComponent} from './components/entry-edit/entry-edit.component';
import {EntryComponent} from './components/entry/entry.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ImportComponent,
    SortDataComponent,
    ImportsMasterComponent,
    ImportsAssignComponent,
    ImportsAllComponent,
    EditCategoriesComponent,
    EntryEditComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ImportModule {
}

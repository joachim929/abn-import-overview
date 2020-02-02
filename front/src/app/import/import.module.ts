import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImportRoutingModule} from './import-routing.module';
import {ImportComponent} from './components/import/import.component';
import {SortDataComponent} from './components/sort-data/sort-data.component';
import { DataNavComponent } from './components/data-nav/data-nav.component';
import { ImportsMasterComponent } from './components/imports-master/imports-master.component';
import { ImportsAssignComponent } from './components/imports-assign/imports-assign.component';
import { ImportsAllComponent } from './components/imports-all/imports-all.component';
import { EditCategoriesComponent } from './components/edit-categories/edit-categories.component';
import { EntryEditComponent } from './components/entry-edit/entry-edit.component';
import { EntryComponent } from './components/entry/entry.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HintsComponent } from './components/hints/hints.component';


@NgModule({
  declarations: [
    ImportComponent,
    SortDataComponent,
    DataNavComponent,
    ImportsMasterComponent,
    ImportsAssignComponent,
    ImportsAllComponent,
    EditCategoriesComponent,
    EntryEditComponent,
    EntryComponent,
    HintsComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule,
    ReactiveFormsModule
  ]
})
export class ImportModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImportComponent} from './components/import/import.component';
import {ImportsMasterComponent} from './components/imports-master/imports-master.component';
import {ImportsAllComponent} from './components/imports-all/imports-all.component';
import {ImportsAssignComponent} from './components/imports-assign/imports-assign.component';
import {EntryEditComponent} from './components/entry-edit/entry-edit.component';

const routes: Routes = [
  {
    path: '', component: ImportsMasterComponent, children: [
      {path: '', component: ImportsAllComponent},
      {path: 'all', component: ImportsAllComponent},
      {path: 'assign', component: ImportsAssignComponent},
      {path: 'edit/:index', component: EntryEditComponent}
    ]
  },
  {path: 'import', component: ImportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule {
}

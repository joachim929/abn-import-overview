import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditHintsModule} from './edit-hints/edit-hints.module';
import {ViewHintsModule} from './view-hints/view-hints.module';
import {HintMasterComponent} from './components/hint-master/hint-master.component';

const routes: Routes = [
  {
    path: '', component: HintMasterComponent, children: [
      {path: 'all', loadChildren: () => import('./view-hints/view-hints.module').then(m => ViewHintsModule)},
      {path: 'edit', loadChildren: () => import('./edit-hints/edit-hints.module').then(m => EditHintsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HintsRoutingModule {
}

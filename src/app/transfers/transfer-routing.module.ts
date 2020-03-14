import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';
import {TransferMasterComponent} from './components/transfer-master/transfer-master.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: '',
    component: TransferMasterComponent,
    children: [
      {path: 'card', loadChildren: () => import('./card/card.module').then(m => CardModule)},
      {path: 'list', loadChildren: () => import('./list/list.module').then(m => ListModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule {
}

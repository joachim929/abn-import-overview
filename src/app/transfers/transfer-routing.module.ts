import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';
import {TransferMasterComponent} from './components/transfer-master/transfer-master.component';
import {TransferMutationHistoryModule} from './history/transfer-mutation-history.module';
import {AssignModule} from './assign/assign.module';

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
  {path: 'history', loadChildren: () => import('./history/transfer-mutation-history.module').then(m => TransferMutationHistoryModule)},
  {path: 'assign', loadChildren: () => import('./assign/assign.module').then(m => AssignModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule {
}

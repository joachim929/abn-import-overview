import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TransferListModule} from './transfer-list/transfer-list.module';
import {TransferMasterComponent} from './components/transfer-master/transfer-master.component';
import {TransferMutationHistoryModule} from './transfer-history/transfer-mutation-history.module';
import {AssignModule} from './transfer-assign/assign.module';
import {TransferCardModule} from './transfer-card/transfer-card.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: '',
    component: TransferMasterComponent,
    children: [
      {path: 'card', loadChildren: () => import('./transfer-card/transfer-card.module').then(m => TransferCardModule)},
      {path: 'list', loadChildren: () => import('./transfer-list/transfer-list.module').then(m => TransferListModule)}
    ]
  },
  {
    path: 'history',
    loadChildren: () => import('./transfer-history/transfer-mutation-history.module').then(m => TransferMutationHistoryModule)
  },
  {path: 'assign', loadChildren: () => import('./transfer-assign/assign.module').then(m => AssignModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TransferMasterComponent} from './components/invoices-master/transfer-master.component';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';

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
export class InvoicesRoutingModule {
}

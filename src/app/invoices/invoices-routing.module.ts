import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvoicesMasterComponent} from './components/invoices-master/invoices-master.component';
import {CardModule} from './card/card.module';
import {ListModule} from './list/list.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'card', pathMatch: 'full'
  },
  {
    path: '',
    component: InvoicesMasterComponent,
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

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvoicesMasterComponent} from './components/invoices-master/invoices-master.component';


const routes: Routes = [
  {path: '', component: InvoicesMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {
}

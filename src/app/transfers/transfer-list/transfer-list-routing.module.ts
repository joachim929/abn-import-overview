import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TransferListMasterComponent} from './components/list-master/transfer-list-master.component';


const routes: Routes = [
  {path: '', component: TransferListMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferListRoutingModule {
}

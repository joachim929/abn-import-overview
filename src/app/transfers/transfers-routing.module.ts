import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TransfersMasterComponent} from './components/transfers-master/transfers-master.component';


const routes: Routes = [
  {path: '', component: TransfersMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule {
}

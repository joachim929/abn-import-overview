import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HistoryMasterComponent} from './components/history-master/history-master.component';


const routes: Routes = [
  {
    path: ':id', component: HistoryMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferMutationHistoryRoutingModule {
}

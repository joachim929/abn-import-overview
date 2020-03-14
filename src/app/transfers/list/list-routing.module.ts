import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListMasterComponent} from './components/list-master/list-master.component';


const routes: Routes = [
  {path: '', component: ListMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {
}

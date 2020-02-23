import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardMasterComponent} from './components/dashboard-master/dashboard-master.component';


const routes: Routes = [
  {path: '', component: DashboardMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

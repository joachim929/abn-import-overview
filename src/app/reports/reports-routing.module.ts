import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsMasterComponent} from './components/reports-master/reports-master.component';


const routes: Routes = [
  {path: '', component: ReportsMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

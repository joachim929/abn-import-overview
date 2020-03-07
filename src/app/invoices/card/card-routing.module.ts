import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardMasterComponent} from './components/card-master/card-master.component';

const routes: Routes = [
  {path: '', component: CardMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }

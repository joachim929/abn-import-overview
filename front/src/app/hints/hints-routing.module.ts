import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HintMasterComponent} from './components/hint-master/hint-master.component';

const routes: Routes = [
  {
    path: '', component: HintMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HintsRoutingModule {
}

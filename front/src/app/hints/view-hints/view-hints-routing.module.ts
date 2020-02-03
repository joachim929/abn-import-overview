import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewHintsMasterComponent} from './components/view-hints-master/view-hints-master.component';

const routes: Routes = [
  {
    path: '', component: ViewHintsMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewHintsRoutingModule {
}

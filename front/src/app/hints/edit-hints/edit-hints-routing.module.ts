import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditHintsMasterComponent} from './components/edit-hints-master/edit-hints-master.component';

const routes: Routes = [
  {
    path: '', component: EditHintsMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditHintsRoutingModule {
}

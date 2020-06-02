import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';


const routes: Routes = [
  {
    path: '', component: RulesMasterComponent, children: [
      {path: 'add'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule {
}

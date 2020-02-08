import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RulesListComponent} from './components/rules-list/rules-list.component';
import {RuleCreateComponent} from './components/rule-create/rule-create.component';

const routes: Routes = [
  {
    path: '', component: RulesMasterComponent, children: [
      {path: '', component: RulesListComponent},
      {path: 'all', component: RulesListComponent},
      {path: 'create', component: RuleCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule {
}

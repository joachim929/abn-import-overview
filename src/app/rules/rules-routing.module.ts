import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RulesMasterComponent} from './components/rules-master/rules-master.component';
import {RulesListComponent} from './components/rules-list/rules-list.component';
import {RuleAddComponent} from './components/rule-add/rule-add.component';


const routes: Routes = [
  {
    path: '', component: RulesMasterComponent,
    children: [
      {
        path: '', component: RulesListComponent,
        children: [
          {path: 'add', component: RuleAddComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ImportModule} from './import/import.module';
import {RulesModule} from './rules/rules.module';
import {CategoriesModule} from './categories/categories.module';
import {InvoicesModule} from './invoices/invoices.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {ReportsModule} from './reports/reports.module';
import {TransfersModule} from './transfers/transfers.module';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'imports', loadChildren: () => import('./import/import.module').then(m => ImportModule)},
  {path: 'transfers', loadChildren: () => import('./transfers/transfers.module').then(m => TransfersModule)},
  {path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => CategoriesModule)},
  {path: 'rules', loadChildren: () => import('./rules/rules.module').then(m => RulesModule)},
  {path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => InvoicesModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => DashboardModule)},
  {path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => ReportsModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

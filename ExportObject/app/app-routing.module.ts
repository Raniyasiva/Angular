import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ExportComponent } from './export/export.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'export', component: ExportComponent },
  { path: 'route', component: RouteComponent },
  { path: '', redirectTo: '/route', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

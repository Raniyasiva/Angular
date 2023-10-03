import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ExportComponent } from './export/export.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'export', component: ExportComponent},
  { path: '', redirectTo: '/export', pathMatch: 'full' } ,
  { path: 'detail/:index' , component:DetailComponent},
  {path:'**' , component:ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


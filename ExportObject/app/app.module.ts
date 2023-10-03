import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExportComponent } from './export/export.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { RouteComponent } from './route/route.component';
import { FormsModule } from '@angular/forms';
import { AppserviceService } from './appservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ExportComponent,
    TableComponent,
    FormComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

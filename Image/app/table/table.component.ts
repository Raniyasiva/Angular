import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 isExport=false;
 tables: any[] = [];

  constructor(public service: MyserviceService , public router:Router)
  {
  this.tables = this.service.tables;
  }
  
update(index:number) {
  this.service.updateForm(index);
}

viewDetail(item: any) {
  const index = this.tables.indexOf(item);
  this.router.navigate(['/detail', index]);
}

form()
  {
    this.router.navigate(['/form']);
   }
}

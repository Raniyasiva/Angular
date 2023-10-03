import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  isExport = false;
  tables: any[] = [];
  exportedItems: any[] = [];
  exported:any[]=[];

  constructor(public service: AppserviceService, public router: Router) {
    this.tables = this.service.tables;
  }

  update(index: number) {
    this.service.updateForm(index);
  }

  export() {
  const exportedItems = this.tables.filter(item => item.checked);
  const queryParams = { items: JSON.stringify(exportedItems) };
  this.router.navigate(['/export'], { queryParams });
}


  updateExport(event: any, item: any) {
    const checked = event.target.checked;
    item.checked = checked;
    if (checked) {
      this.service.exportedItems.push(item);
    } else {
      const index = this.service.exportedItems.findIndex(exportedItem => exportedItem === item);
      if (index !== -1) {
        this.service.exportedItems.splice(index, 1);
      }
    }
  }
  
  exp() {
    this.router.navigate(['/export']);
  }

  form() {
    this.router.navigate(['/form']);
  }
}
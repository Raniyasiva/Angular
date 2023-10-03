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
 exportedItems: any[] = [];
 exported:any;

constructor(public service: MyserviceService , public router:Router)
{
  this.tables = this.service.tables;
}

update(index:number) {
  this.service.updateForm(index);
}
export() {
  this.exportedItems = this.tables.filter(item => item.checked);
  this.isExport = true;
}
// export() {
//   this.exportedItems = [];       
//   for (let i = 0; i < this.tables.length; i++) {
//     let item = this.tables[i];
//     if (item.checked) {
//       this.exportedItems.push(item);
//     }
//   }    
//   this.isExport = true;
// }

updateExport(event: any, item: any) 
{
  let check = event.target.checked;
  item.checked = check;
  if (item.check)
   {
    this.exported.push(item);
   }
}
form()
  {
    this.router.navigate(['/form']);
   }
}

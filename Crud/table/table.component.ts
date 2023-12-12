import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
//displayedColumns: string[] = ['name', 'email', 'phone'];

tables:any[]=[];
editIndex: number | null = null;
constructor(private service:MyserviceService , private router:Router)
{
this.tables=this.service.tables;
}

form()
{
  this.router.navigate(['/table']);
}

edit(index:number )
{
 this.service.editForm(index);
 this.router.navigate(['/form']);
}

delete(index:number)
{
this.service.delete(index);
this.tables = this.service.tables;
}

}

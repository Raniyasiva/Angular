import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  constructor( public service:ServiceService , public router:Router){}
   
  onUpdate(index:number){
    this.service.updateForm(index);
  }
  form(){
this.router.navigate(['/form']);
  }
}

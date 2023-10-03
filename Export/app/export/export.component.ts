import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent {
  constructor(public router: Router){
  }
form(){
  this.router.navigate(['/form'])
}
table(){
   this.router.navigate(['/table'])
}
}

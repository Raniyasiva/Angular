import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  constructor(public router: Router){
  }
form(){
  this.router.navigate(['/form'])
}
table(){
   this.router.navigate(['/table'])
}
}

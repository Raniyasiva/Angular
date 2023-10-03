import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 constructor(public service:ServiceService , public router: Router){}

 onSubmit() {
  this.service.submitForm(this.service.form);
}
table(){
  this.router.navigate(['/table']);
}
}

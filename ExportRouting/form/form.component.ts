import { Component } from '@angular/core';
import { MyserviceService } from '../my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 
  constructor(public service: MyserviceService , public router:Router) { }

  onSubmit() {
    this.service.submitForm(this.service.form);
    this.resetForm();
  }

  resetForm() {
    this.service.form = {};
  }
  table(){
     this.router.navigate(['/table']);
    }
    
  }
  
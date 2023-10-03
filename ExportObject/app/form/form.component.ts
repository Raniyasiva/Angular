import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  constructor(public service: AppserviceService , public router:Router) { }
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


import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  selectedImage: File | null = null;
  constructor(public service: MyserviceService , public router:Router) { }

  onSubmit() {
    this.service.submitForm(this.service.form, this.selectedImage);
    this.resetForm();
  }
  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }
  resetForm() {
    this.service.form = {};
  }
  table(){
     this.router.navigate(['/table']);
    }
    
  }
  
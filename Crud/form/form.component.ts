import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
editIndex:any;
contactForm!:FormGroup;
  constructor(public service:MyserviceService ) { }
 
  ngOnInit(): void {
  this.contactForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*"), Validators.maxLength(10)]),   
    email:new FormControl('',[Validators.required,Validators.email]),        
    tel:new FormControl('',[Validators.required,Validators.pattern("[0-9]*")])
  });
}
table(){
 // this.router.navigate(['/table']); 
 }
get username(){
  return this.contactForm.get('username');
}
get email(){
  return this.contactForm.get('email');
}
get tel(){
  return this.contactForm.get('tel');
}
get name(){
  return this.contactForm.get('name')
}
onSubmit() 
{
  const formdata=this.contactForm.value
    if (this.service.editIndex !== null)  
    {
      this.service.update(this.service.editIndex,formdata);
      this.service.editIndex = null;
    } 
    else
    {
      this.service.signup(formdata);
    }
    this.contactForm.reset(); 
}
//this.service.signup(this.service.formdata);
}

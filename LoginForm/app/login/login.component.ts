import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  loginClicked = false;
  contactForm: FormGroup;
  constructor( public router:Router) {
    this.contactForm = new FormGroup({
     username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]), 
     password: new FormControl('', [Validators.required, Validators.minLength(3)]),  
     confirmpassword : new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }
  get username() {
    return this.contactForm.get('username');
  }
  get password(){
    return this.contactForm.get('password');
  }
  register() {
    this.router.navigate(['/register']);
  }
  get confirmpassword(){
    return this.contactForm.get('confirmpassword');
  }
  onSubmit(contactForm:any){
// if(this.contactForm.valid){
// alert('form is submitted')
// }
  }
}
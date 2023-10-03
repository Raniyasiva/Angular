import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  empForm: FormGroup;
qualification:string[]=[
  'B.A','M.A' ,'B.tech'
];
constructor(
  private builder:FormBuilder ,
  // private dialog:MatDialogRef<RegisterComponent>,
  public router:Router)
{
 this.empForm =  this.builder.group({
 firstName: '',
 lastName: '',
 email: '',
 dob: '',
 gender:'',
 qualification: '',
 company:'',
 location:'',
 experiance:''
})
}

onSubmit(){
  this.router.navigate(['/login']);
}

}
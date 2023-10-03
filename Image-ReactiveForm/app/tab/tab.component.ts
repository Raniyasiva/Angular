import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ServiceService } from '../myservice/service.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent  {
  hide = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  loginClicked = false;
  contactForm: FormGroup;
  login:FormGroup;
  empForm: FormGroup;
  qualification: string[] = ['B.A', 'M.A', 'B.tech'];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Angular', 'JavaScript', 'CSS', 'HTML', 'C Programming' , 'OOPS' , 'DSA'];
  filter:any;
  fruitInput:any;
  
  constructor(private formBuilder: FormBuilder,private service:ServiceService, private router: Router) {
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      tel: ['', [Validators.required,  Validators.maxLength(10)]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      district:['',[Validators.required]],
      skills:['']
    });
    this.login = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]],
      pw: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );

    this.empForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      qualification: '',
      company: '',
      location: '',
      experience: ''
    });
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push(value);
    }
    event.chipInput!.clear();
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  get name() {
    return this.login.get('name');
  }

  get pw() {
    return this.login.get('pw');
  }

  get username() {
    return this.contactForm.get('username');
  }

  get password() {
    return this.contactForm.get('password');
  }

  get confirmpassword() {
    return this.contactForm.get('confirmpassword');
  }
 get email(){
  return this.contactForm.get('email');
 }
 get tel(){
  return this.contactForm.get('tel');
 }

 get gender(){
  return this.contactForm.get('gender');
 }
 get district(){
  return this.contactForm.get('district');
 }
 get dob(){
  return this.contactForm.get('dob');
 }
 onSubmitLoginForm() {
  if (this.login.valid) {
    const username = this.login.value.name;
    const password = this.login.value.pw;

    const loggedIn = this.service.loginUser(username, password);
    if (loggedIn) {
      // Redirect to another page (replace 'your-page-url' with the desired URL)
      this.router.navigate(['your-page-url']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}

register() {
    if (this.contactForm.valid) {
     this.service.addUser(this.contactForm.value);
      alert('Form is registered');
    } 
  }
}

import { Component, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() set form(value: any) {
    this.resetForm(value);
  }
  checkbox1:any;
  checkbox2:any;
  checkbox3:any;
  checkbox4:any;
  resetForm(item: any) {
    if (item) {
      this.checkbox1 = item.checkbox1;
      this.checkbox2 = item.checkbox2;
      this.checkbox3 = item.checkbox3;
      this.checkbox4 = item.checkbox4;
    }
  }

onSubmit() {
  const formData = {
checkbox1: this.checkbox1,
checkbox2: this.checkbox2,
checkbox3: this.checkbox3,
checkbox4: this.checkbox4
    };
this.formSubmit.emit(formData);
    this.checkbox1='';
    this.checkbox2='';
    this.checkbox3='';
    this.checkbox4=''
  }
}

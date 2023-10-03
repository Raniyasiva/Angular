import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class ServiceService {

  constructor() { }
  childTable: any[] = [];
  form: any = {};

  submitForm(formData: any) {
    const newRow = {
      col1Checked: formData.checkbox1,
      col2Checked: formData.checkbox2,
      col3Checked: formData.checkbox3,
      col4Checked: formData.checkbox4
    };
    this.childTable.push(newRow);
   this.form={};
  }

  updateForm(index: number) {
    const row = this.childTable[index];
    this.form = {
      checkbox1: row.col1Checked,
      checkbox2: row.col2Checked,
      checkbox3: row.col3Checked,
      checkbox4: row.col4Checked
    };
  }
}

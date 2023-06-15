import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childTable: any[] = [];
  form: any;
  checkbox1: any;
  checkbox2: any;
  checkbox3: any;
  checkbox4: any;
  onSubmitForm(formData: any) {
    const newRow = {
      col1Checked: formData.checkbox1,
      col2Checked: formData.checkbox2,
      col3Checked: formData.checkbox3,
      col4Checked: formData.checkbox4
    };
    this.childTable.push(newRow);
  }
onUpdate( index: number) {
    const row = this.childTable[index];
    this.form = {
      checkbox1: row.col1Checked,
      checkbox2: row.col2Checked,
      checkbox3: row.col3Checked,
      checkbox4: row.col4Checked
    }; 
  }
}

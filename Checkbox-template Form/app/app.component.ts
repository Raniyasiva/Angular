import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Checktemp';
  formData: any = {};
  childTable: any[] = [];

  onSubmit() {
    const newRow = {
      tablecheckbox1: this.formData.checkbox1,
      tablecheckbox2: this.formData.checkbox2,
      tablecheckbox3: this.formData.checkbox3,
      tablecheckbox4: this.formData.checkbox4
    };
    this.childTable.push(newRow);
    this.formData = {};
  }

  onUpdate(index: number) {
    const row = this.childTable[index];
    this.formData = {
      checkbox1: row.tablecheckbox1,
      checkbox2: row.tablecheckbox2,
      checkbox3: row.tablecheckbox3,
      checkbox4: row.tablecheckbox4
    };   
  }
}

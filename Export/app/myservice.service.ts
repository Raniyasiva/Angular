import { Injectable } from '@angular/core';                    
@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  tables: any[] = [];
  form: any = {};
  constructor() {}

  submitForm(formData: any) {
    const newRow = {
      parent1: formData.parent1,
      parent2: formData.parent2,
      parent3: formData.parent3,
      parent4: formData.parent4,
      parent5: formData.parent5,
      checked: false
    };
    this.tables.push(newRow);
    this.form = {};
  }
  updateForm(index: number) {
    const row = this.tables[index];
    this.form = {
      parent1: row.parent1,
      parent2: row.parent2,
      parent3: row.parent3,
      parent4: row.parent4,
      parent5: row.parent5
    };
  }
}

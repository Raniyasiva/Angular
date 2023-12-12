import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  selectedCountry: number = 0;
  countries: any;
  states: any[] = [];
  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.service.getCountries().subscribe((data:any) => {
      this.countries = data.records;
      //alert(data.records.name);
    });
  }
  updateStates() {
    this.service.getStates(this.selectedCountry).subscribe((data: any) => {
      this.states = data.records;
      console.log(this.selectedCountry);
    });
  }
}

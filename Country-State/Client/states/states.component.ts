import { Component,Input, OnChanges } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent  {
  //@Input() countryId: number=0;
  states: any[]=[];

  constructor(private service: CountryService) {}
  // ngOnChanges() {
  //   this.updateStates(this.countryId);
  // }
  // updateStates(event: any) {
  //   const countryId = event.target.value;
  //   console.log(countryId);
    
  //   this.service.getStates(countryId).subscribe((data:any) => {
  //     this.states = data.records;
  //   });
  // }
}

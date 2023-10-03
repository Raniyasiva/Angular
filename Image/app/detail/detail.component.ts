import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: any;

  constructor(public route: ActivatedRoute, public service: MyserviceService) { }
  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('index');
    if (index !== null) {
      this.item = this.service.tables[+index];
    }
  }
}
import { Component, OnInit } from '@angular/core';      
import{ Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'barchart';
  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Tamil', 'English', 'Maths', 'Science', 'Social'],
          datasets: [{ 
              label: 'Jini',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: '#0196FD',
              borderColor:'#0196FD', 
              borderWidth: 1
            },

            {
              label:'Sowmi',
              data:[19, 12, 5, 3, 1, 6],
              backgroundColor:"#FFAF00",
              borderColor:'#FFAF00',
              borderWidth:1         
            }
          ]
           },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      min:0,
                      max:100,
                      stepSize:1
                  }
              }]
          }
      }
  });
  }
}



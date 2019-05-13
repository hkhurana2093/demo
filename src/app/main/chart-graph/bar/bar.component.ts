import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.multi;
  }

  multi = [
    {
      "name": "India",
      "series": [
        {
          "name": "2015",
          "value": 7300000
        },
        {
          "name": "2016",
          "value": 8940000
        },
        {
          "name": "2017",
          "value": 6940000
        },
        {
          "name": "2018",
          "value": 6940000
        },
        {
          "name": "2019",
          "value": 9940000
        }

      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Population';
  showYAxisLabel = true;
  yAxisLabel = 'Country';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  onSelect(event) {
    console.log(event);
  }
}

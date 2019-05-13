import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {


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
          "name": "2015",
          "value": 870000
        },
        {
          "name": "2016",
          "value": 5270000
        },
        {
          "name": "2016",
          "value": 6940000
        },
        {
          "name": "2018",
          "value": 9940000
        },
        {
          "name": "2019",
          "value": 8940000
        },
        {
          "name": "2019",
          "value": 6940000
        }
      ]
    },
  
    {
      "name": "Canada",
      "series": [
        {
          "name": "2015",
          "value": 6000002
        },
        {
          "name": "2016",
          "value": 7800000
        },
        {
          "name": "2017",
          "value": 8940000
        },
        {
          "name": "2018",
          "value": 6940000
        },
        {
          "name": "2019",
          "value": 6940000
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
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}

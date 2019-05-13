import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {



  ngOnInit() {
    this.single;
  }

  single = [
    {
      "City": "India",
      "value":20032
    },
    {
      "City": "USA",
      "value":50032
    },
    {
      "City": "China",
      "value":900032
    }
      
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showLabels=true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;
  explodeSlices = false;
  doughnut = false;
  autoScale = true;
  
  // line, area

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  

  onSelect(event) {
    console.log(event);
  }
 
}

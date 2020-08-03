import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: 'Garbage Collected',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        // {
        //   name: 'Disposable',
        //   data: [3, 20, 5, 50, 30, 55, 60, 80, 140]
        // },
        // {
        //   name: 'Plastic',
        //   data: [7, 21, 30, 50, 30, 55, 60, 80, 140]
        // }
        ],
        chart: {
          height: 350,
          type: 'line'
        },
        title: {
          text: 'My First Angular Chart'
        },
        xaxis: {
          categories: ['Jan', 'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug', 'Sep']
        }
    };
  }

  ngOnInit() {
  }

}

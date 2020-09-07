import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';
import { StatisticsService } from 'src/app/services/statistics.service';
import { APIResponse } from 'src/app/helpers/api-response';
import { AuthService } from 'src/app/services/auth.service';
import { idTokenResult } from '@angular/fire/auth-guard';

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

  public orgCount = 0;
  public locationsCount = 0;
  public pvLocationsCount = 0;
  public vehicleCount = 0;

  public locationsByUserCount = 0;
  public binsByUserCount = 0;

  public idTokenResult;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor(
    private statisticsService: StatisticsService,
    private authService: AuthService
  ) { 

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
    this.authService.getIdTokenResult().then(token => {
      this.idTokenResult = token;
      this.getOrganizationCount();
      this.getLocationsCount();
      this.getPVLocationsCount();
      this.getVehicleCount();
      this.getLocationCountByUser();
      this.getBinCountByUser();
    });
  }

  private getOrganizationCount() {
    this.statisticsService.getOrganizationCount().subscribe((response: APIResponse) => {
      this.orgCount = response.data;
    });
  }

  private getLocationsCount() {
    this.statisticsService.getLocations().subscribe((response: APIResponse) => {
      this.locationsCount = response.data;
    });
  }

  private getPVLocationsCount() {
    this.statisticsService.getPVLocationCount().subscribe((response: APIResponse) => {
      this.pvLocationsCount = response.data;
    });
  }

  private getVehicleCount() {
    this.statisticsService.getVehicleCount().subscribe((response: APIResponse) => {
      this.vehicleCount = response.data;
    });
  }

  private getLocationCountByUser() {
    this.statisticsService.getLocationsCountByUser(this.idTokenResult.claims.user_id).subscribe((response: APIResponse) => {
      this.locationsByUserCount = response.data;
    });
  }

  private getBinCountByUser() {
    this.statisticsService.getBinCountByUser(this.idTokenResult.claims.user_id).subscribe((response: APIResponse) => {
      this.binsByUserCount = response.data;
    });
  }

}

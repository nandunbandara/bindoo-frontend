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
import { LaneService } from 'src/app/services/lane.service';
import { PickuplistService } from 'src/app/services/pickuplist.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { AllocationsService } from 'src/app/services/allocations.service';
import { BinsService } from 'src/app/services/bins.service';

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
  public locationCountByCouncil = 0;

  public idTokenResult;

  public uid;
  public pickuplist;
  public pickuplistId;
  public vehicleAllocations;

  public binCouncilCount;
  public readyBinCount;

  public collections;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;

  constructor(
    private statisticsService: StatisticsService,
    private authService: AuthService,
    private laneService: LaneService,
    private pickuplistService: PickuplistService,
    private vehicleService: VehicleService,
    private allocationService: AllocationsService,
    private binService: BinsService,
  ) { 

    this.chartOptions = {
      series: [
        {
          name: 'Garbage Collected',
          data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0]
        },
        ],
        chart: {
          height: 350,
          type: 'bar'
        },
        title: {
          text: 'My First Angular Chart'
        },
        xaxis: {
          categories: ['Jan', 'Feb',  'Mar',  'Apr',  'May',  'Jun',  'Jul',  'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    };
  }

  ngOnInit() {
    this.authService.getIdTokenResult().then(token => {
      this.idTokenResult = token;
      this.uid = token.claims.user_id;

      this.getOrganizationCount();
      this.getLocationsCount();
      this.getPVLocationsCount();
      this.getVehicleCount();
      this.getLocationCountByUser();
      this.getBinCountByUser();

      if (this.idTokenResult.claims.userType === 2) {
        this.loadPickupList();
        this.loadVehicleAllocations();
        // this.getCollections();
        this.getLocationCountByCouncil();
        this.loadBins();
        this.readyBins();
      }
    });
  }

  private loadBins() {
    this.binService.getBinsByCouncil(this.uid).subscribe((response: APIResponse)=>{
      this.binCouncilCount = response.data.length;
    });
  }

  private readyBins() {
    this.binService.getBinByCouncilAndStatus(this.uid, true).subscribe((response: APIResponse) => {
      this.readyBinCount = response.data.length;
    })
  }

  private loadVehicleAllocations() {
    this.allocationService.getVehicleAllocationsByCouncil(this.uid)
      .subscribe((response: APIResponse) => this.vehicleAllocations = response.data);
  }

  private loadPickupList() {
    this.pickuplistService.getPickupListsByCouncilAndDate(this.uid, Date.now()).subscribe((response: APIResponse) => {
      this.pickuplist = response.data;
      this.pickuplistId = this.pickuplist[0].pickListId;
      console.log(this.pickuplist);
    });
  }

  public createPickupList() {
    this.pickuplistService.createPickupList(this.uid).subscribe((response: APIResponse) => this.loadPickupList());
  }

  public createAllocation(pickupListItemId, laneId, vehicleId, amount) {
    console.log(pickupListItemId, laneId, vehicleId, amount);
    this.allocationService.createAllocation(this.uid, laneId, vehicleId, amount, pickupListItemId).subscribe((response: APIResponse) => {
      this.loadPickupList();
      this.loadVehicleAllocations();
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

  private getLocationCountByCouncil() {
    this.statisticsService.getLocationsByCouncil(this.uid).subscribe((response: APIResponse) => {
      this.locationCountByCouncil = response.data;
    })
  }

  public discardPickupList() {
    this.pickuplistService.deletePickupList(this.pickuplistId).subscribe((response: APIResponse) => this.loadPickupList());
  }

  public removeAllocation(id, pickupListItemId) {
    this.allocationService.removeAllocation(id, pickupListItemId).subscribe((response: APIResponse) => {
      this.loadPickupList();
      this.loadVehicleAllocations();
    });
  }

  public completeAllocation(laneId: string, amount, pickupListItemId, allocationId) {
    this.allocationService.completeAllocation(this.uid, laneId, amount, pickupListItemId, allocationId).subscribe((response: APIResponse) => {
      this.loadPickupList();
      this.loadVehicleAllocations();
    });
  }

  public getCollections() {
    this.allocationService.getCollections(this.uid).subscribe((response: APIResponse) => {
      this.collections = response.data;
      console.log(this.collections);

      const arr = [0,0,0,0,0,0,0,0,0,0,0,0];
      this.collections.forEach(collection => {
        const date = new Date(collection.date);
        console.log(date.getMonth());
        arr[date.getMonth()] += collection.amount;
      });

      this.chartOptions.series = [
        {
          name: 'Garbage Collected',
          data: arr
        },
        ];

    })
  }

}

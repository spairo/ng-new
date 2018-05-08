import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'new-portafolios-mosaic',
  templateUrl: './portafolios-mosaic.component.html',
  styleUrls: ['./portafolios-mosaic.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortafoliosMosaicComponent implements OnInit {

  @Input() boxes = [];

  // lineChart
  public lineChartcolors: any[] = [
    { backgroundColor: ['#e6f0f4']}
  ];

  public lineChartData: Array<any> = [{data: ['97.9964', '97.5857', '96.873'], label: 'Precio'}];
  public lineChartLabels: Array<any> = ['02-07-2019', '02-08-2019', '02-09-2019'];

  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        id: 'y-axis-1',
        type: 'linear',
        display: true,
        position: 'left',
        gridLines: {
          display: false
        }
      }]
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //console.log(this.boxes.value["0"].prices);
    //date
  }

  gotoDetail(serie: string, id: number) {
    this.router.navigate(['portafolios/detalle', serie, id]);
  }

}

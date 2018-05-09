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

  public lineChartcolors: any[] = [{ backgroundColor: ['#e6f0f4']}];
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
  ) {}

  ngOnInit() {}

  gotoDetail(serie: string, id: number) {
    this.router.navigate(['portafolios/detalle', serie, id]);
  }

}

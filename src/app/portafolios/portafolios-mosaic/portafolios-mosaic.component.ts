import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'new-portafolios-mosaic',
  templateUrl: './portafolios-mosaic.component.html',
  styleUrls: ['./portafolios-mosaic.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortafoliosMosaicComponent implements OnInit {

  @Input() boxes = [];

  // lineChart

  public lineChartData: Array<any> = [{data: ['97.9964', '97.5857', '96.873', '95.5325', '95.209', '94.6646', '95.148'], label: 'Precio'}];
  public lineChartLabels: Array<any> = ['02-07-2019', '02-08-2019', '02-09-2019', '02-10-2019', '02-11-2019', '02-12-2019', '02-13-2019'];
  public lineChartcolors: any[] = [{ backgroundColor: ['#A1BFD3']}];
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
  }

  gotoDetail(serie: string, id: number) {
    this.router.navigate(['portafolios/detalle', serie, id]);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'new-detalle-cupones-chart',
  template: `
    <canvas
      baseChart
      [datasets]="datos"
      [labels]="titulos"
      [options]="barChartOptions"
      [colors]="colors"
      [chartType]="barChartType"
      [legend]="barChartLegend"
      height="250"
      width="230">
    </canvas>
  `
})
export class DetalleCuponesChartComponent implements OnInit {

  public barChartOptions: any = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }]
    },
    responsive: false
  };

  public colors: any[] = [{ backgroundColor: ['#89D1F3', '#009EE5', '#094fa4']}];
  public titulos: string[] = ['Cupones totales', 'Cupones observados', 'Cupones pagados', ''];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public datos: any[] = [
    {data: [25, 25, 23, 0]}
  ];

  constructor() { }

  ngOnInit() {
  }
}

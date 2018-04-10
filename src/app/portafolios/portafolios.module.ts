import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';
import { ChartsModule } from 'ng2-charts';
import { NvD3Module } from 'ng2-nvd3';

import 'd3';
import 'nvd3';

import { PortafoliosComponent } from './portafolios/portafolios.component';
import { PortafoliosService } from './portafolios/portafolios.service';
import { LateralComponent } from './lateral/lateral.component';
import { LateralService } from './lateral/lateral.service';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleService } from './detalle/detalle.service';
import { DetalleCuponesChartComponent } from './detalle-cupones-chart/detalle-cupones-chart.component';
import { PortafoliosMosaicComponent } from './portafolios-mosaic/portafolios-mosaic.component';
import { DetalleMultichartComponent } from './detalle-multichart/detalle-multichart.component';

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
    NvD3Module
  ],
  declarations: [
    PortafoliosComponent,
    LateralComponent,
    DetalleComponent,
    DetalleCuponesChartComponent,
    PortafoliosMosaicComponent,
    DetalleMultichartComponent
  ],
  providers: [PortafoliosService],
  entryComponents: []
})
export class PortafoliosModule { }

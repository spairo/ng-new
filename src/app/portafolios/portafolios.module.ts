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
import { PortafoliosMosaicComponent } from './portafolios/portafolios-mosaic/portafolios-mosaic.component';
import { LateralComponent } from './lateral/lateral.component';
import { LateralService } from './lateral/lateral.service';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleService } from './detalle/detalle.service';
import { DetalleCuponesChartComponent } from './detalle/detalle-cupones-chart/detalle-cupones-chart.component';
import { DetalleMultichartComponent } from './detalle/detalle-multichart/detalle-multichart.component';
import { DetalleNavbarComponent } from './detalle/detalle-navbar/detalle-navbar.component';
import { PortafoliosListComponent } from './portafolios/portafolios-list/portafolios-list.component';

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
    DetalleMultichartComponent,
    DetalleNavbarComponent,
    PortafoliosListComponent
  ],
  providers: [PortafoliosService],
  entryComponents: []
})
export class PortafoliosModule { }

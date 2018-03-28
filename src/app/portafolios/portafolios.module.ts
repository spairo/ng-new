import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';
import { ChartsModule } from 'ng2-charts';

import { PortafoliosComponent } from './portafolios/portafolios.component';
import { PortafoliosService } from './portafolios/portafolios.service';
import { LateralComponent } from './lateral/lateral.component';
import { LateralService } from './lateral/lateral.service';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleService } from './detalle/detalle.service';

@NgModule({
  imports: [
    SharedModule,
    ChartsModule
  ],
  declarations: [PortafoliosComponent, LateralComponent, DetalleComponent],
  providers: [PortafoliosService]
})
export class PortafoliosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { PortafoliosComponent } from './portafolios/portafolios.component';
import { PortafoliosService } from './portafolios/portafolios.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PortafoliosComponent],
  providers: [PortafoliosService]
})
export class PortafoliosModule { }

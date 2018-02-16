import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { PortafoliosComponent } from './portafolios/portafolios.component';
import { PortafoliosService } from './portafolios/portafolios.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PortafoliosComponent],
  providers: [PortafoliosService]
})
export class PortafoliosModule { }

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { ProgramasComponent } from './programas/programas.component';
import { ProgramasService } from './programas/programas.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProgramasComponent, ModalComponent],
  providers: [ProgramasService]
})
export class ProgramasModule {}

